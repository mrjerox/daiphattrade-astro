interface ImportMetaEnv {
  readonly API_HOST: string;
  readonly API_ENDPOINT: string;
  readonly API_TOKEN: string;
  readonly MEDIA_HOST: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
