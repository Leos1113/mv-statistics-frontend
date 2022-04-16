import useSWR from "swr";


const fetcher = (url: string) => fetch(url).then(r => r.json());

export const useGetForums = () => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/forums`;
    
    const { data: forums, error } = useSWR(url, fetcher);

    return { forums, error };
}
