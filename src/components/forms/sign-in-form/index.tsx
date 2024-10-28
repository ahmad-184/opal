import ButtonWithLoaderAndProgress from "@/components/button-with-loader-and-progress-bar";
import FormGeneration from "@/components/form-generation";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";

type Props = {};

const SignInForm = (props: Props) => {
  const form = useForm();
  const { control } = form;

  return (
    <Form {...form}>
      <form className="w-full flex flex-col gap-2">
        <div className="flex gap-3">
          <FormGeneration
            id="firstname"
            type="text"
            control={control}
            disabled={false}
            inputType="input"
            name="firstname"
            placeholder="First name"
            input_classname="dark:bg-neutral-950 bg-white"
          />
          <FormGeneration
            id="lastname"
            type="text"
            control={control}
            disabled={false}
            inputType="input"
            name="lastname"
            placeholder="Last name"
            input_classname="dark:bg-neutral-950 bg-white"
          />
        </div>
        <FormGeneration
          id="email"
          type="email"
          control={control}
          disabled={false}
          inputType="input"
          name="email"
          placeholder="Email"
          input_classname="dark:bg-neutral-950 bg-white"
        />
        <FormGeneration
          id="password"
          type="password"
          control={control}
          disabled={false}
          inputType="input"
          name="password"
          placeholder="Password"
          input_classname="dark:bg-neutral-950 bg-white"
        />
        <ButtonWithLoaderAndProgress className="w-full mt-2">
          Next
        </ButtonWithLoaderAndProgress>
      </form>
    </Form>
  );
};

export default SignInForm;
