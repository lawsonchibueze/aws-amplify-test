/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Blogs } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BlogsUpdateFormInputValues = {
    title?: string;
    content?: string;
    image?: string;
};
export declare type BlogsUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlogsUpdateFormOverridesProps = {
    BlogsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BlogsUpdateFormProps = React.PropsWithChildren<{
    overrides?: BlogsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    blogs?: Blogs;
    onSubmit?: (fields: BlogsUpdateFormInputValues) => BlogsUpdateFormInputValues;
    onSuccess?: (fields: BlogsUpdateFormInputValues) => void;
    onError?: (fields: BlogsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BlogsUpdateFormInputValues) => BlogsUpdateFormInputValues;
    onValidate?: BlogsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BlogsUpdateForm(props: BlogsUpdateFormProps): React.ReactElement;
