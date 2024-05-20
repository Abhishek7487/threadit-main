import supabase, { supabaseUrl } from "./supabase";

export async function getPosts() {
  const { data, error } = await supabase.from("posts").select("*");

  if (error) {
    console.log(error);
    throw new Error("Posts could not be loaded");
  }

  return data;
}

export async function createPost(newPost) {
  const imageName = `${Math.random()}-${newPost.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/postImage/${imageName}`;

  // https://pcsduzfqfdchqhsfxhbi.supabase.co/storage/v1/object/public/postImage/logo.png

  // 1. Create Post
  const { data, error } = await supabase
    .from("posts")
    .insert([{ ...newPost, image: imagePath }])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Posts could not be created");
  }

  // 2. Upload Image
  const { error: storageError } = await supabase.storage
    .from("postImage")
    .upload(imageName, newPost.image);

  // 3. Delete the post IF there was an error uploading the image
  if (storageError) {
    await supabase.from("posts").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error(
      "Posts image could not be uploaded and the post was not created"
    );
  }

  return data;
}

export async function updatePostVotes(post) {
  const updatedPostVotes = post.postVotes++;
  const { data, error } = await supabase
    .from("posts")
    .update({ postVotes: updatedPostVotes })
    .eq("id", post.id)
    .select();

  if (error) {
    throw new Error("Posts could not be created");
  }

  return data;
}
