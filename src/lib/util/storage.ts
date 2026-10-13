const instance =
  typeof window === 'undefined'
    ? null
    : new URLSearchParams(window.location.search).get('instance')?.trim() || null;

export const hasStorageInstance = instance !== null;

export const getStorageKey = (key: string): string =>
  instance === null ? key : `${key}:${instance}`;

export const hasStoredValue = (key: string): boolean =>
  typeof window !== 'undefined' && window.localStorage.getItem(getStorageKey(key)) !== null;
