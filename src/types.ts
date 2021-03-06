import { DataQuery, DataSourceJsonData } from '@grafana/data';
import { MetricFindValue } from '@grafana/data';

export interface MyQuery extends DataQuery {
  queryText: string;
  newest?: number;
}

export const defaultQuery: Partial<MyQuery> = {
  queryText: '',
  newest: 500,
};

/**
 * These are options configured for each DataSource instance
 */
export interface MyDataSourceOptions extends DataSourceJsonData {
  path?: string;
}

/**
 * Value that is used in the backend, but never sent over HTTP to the frontend
 */
export interface MySecureJsonData {
  apiKey?: string;
}

export interface SimpleSuggestion extends MetricFindValue {
  text: string;
  type: string;
  value: string;
}
