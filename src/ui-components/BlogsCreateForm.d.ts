/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BlogsCreateFormInputValues = {
    title?: string;
    content?: string;
    image?: string;
};
export declare type BlogsCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlogsCreateFormOverridesProps = {
    BlogsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BlogsCreateFormProps = React.PropsWithChildren<{
    overrides?: BlogsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BlogsCreateFormInputValues) => BlogsCreateFormInputValues;
    onSuccess?: (fields: BlogsCreateFormInputValues) => void;
    onError?: (fields: BlogsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BlogsCreateFormInputValues) => BlogsCreateFormInputValues;
    onValidate?: BlogsCreateFormValidationValues;
} & React.CSSProperties>;
export default function BlogsCreateForm(props: BlogsCreateFormProps): React.ReactElement;
