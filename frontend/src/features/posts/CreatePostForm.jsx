import styled from "styled-components";

import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";

const StyledCreatePostForm = styled.form`
  margin: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  background-color: var(--color-grey-0);
`;

const Label = styled.label`
  font-weight: 500;
`;

function CreatePostForm() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {}

  function onError(errors) {
    console.log(errors);
  }

  return (
    <StyledCreatePostForm onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Post Title" error={errors?.title?.message}>
        <Input
          type="text"
          id="title"
          {...register("title", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Content of the post" error={errors?.content?.message}>
        <Textarea
          type="number"
          id="content"
          defaultValue=""
          {...register("content", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Post Image</Label>
        <FileInput
          id="image"
          accept="image/*"
          type="file"
          {...register("image", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Create Post</Button>
      </FormRow>
    </StyledCreatePostForm>
  );
}

export default CreatePostForm;
