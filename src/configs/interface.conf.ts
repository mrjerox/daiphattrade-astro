// GraphQL request interface
export interface GraphQLRequest {
  query: string;
  variables?: Record<string, any>;
}

// GraphQL response interface
export interface GraphQLResponse<T = any> {
  data?: T;
  errors?: Array<{
    message: string;
    locations?: Array<{ line: number; column: number }>;
    path?: string[];
  }>;
}