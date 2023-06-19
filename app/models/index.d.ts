import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerBlogs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Blogs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBlogs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Blogs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Blogs = LazyLoading extends LazyLoadingDisabled ? EagerBlogs : LazyBlogs

export declare const Blogs: (new (init: ModelInit<Blogs>) => Blogs) & {
  copyOf(source: Blogs, mutator: (draft: MutableModel<Blogs>) => MutableModel<Blogs> | void): Blogs;
}