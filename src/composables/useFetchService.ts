export async function useFetchService<E>(
  url: string,
  methode: any,
  data?: Object,
) {
  return useFetch<E>(url, {
    baseURL: "/api",
    method: methode,
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
}
