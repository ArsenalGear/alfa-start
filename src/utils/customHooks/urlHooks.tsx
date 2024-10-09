export const useQuery = (param: string | null) => {
  const url: URL = new URL(window.location.href);
  const params: URLSearchParams = url.searchParams;
  if (param) {
    return params.get(param);
  }
  return null;
};
