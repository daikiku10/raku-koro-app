import { FC } from "react";
import { TextField } from "@material-ui/core";
import { Controller, Control, FieldError } from "react-hook-form";

interface Props {
  control: Control;
  error: FieldError;
}

export const PasswordInput: FC<Props> = ({ control, error }) => {
  return (
    <>
      <Controller
        name="password"
        control={control}
        rules={{
          required: true,
          minLength: 8,
          maxLength: 10,
          pattern: /^[a-zA-Z0-9!#$%&()*+,.:;=?@[\]^_{}-]+$/,
        }}
        render={({ field }) => (
          <TextField label="パスワード" type="password" {...field} />
        )}
      />
      {error !== undefined && (
        <p style={{ color: "red" }}>
          {error.type === "required" && "パスワードを入力してください"}
          {error.type === "minLength" &&
            "パスワードは8文字以上10文字以内で入力して下さい"}
          {error.type === "maxLength" &&
            "パスワードは8文字以上10文字以内で入力して下さい"}
          {error.type === "pattern" &&
            "パスワードは半角英数字と記号「!@#$%^&*()_+-=[]{};:?,.」のみ使用可能です"}
        </p>
      )}
    </>
  );
};
