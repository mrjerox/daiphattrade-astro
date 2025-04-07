interface ImportMetaEnv {
  readonly API_URL: string;
  readonly API_TOKEN: string;
  readonly BASE_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}