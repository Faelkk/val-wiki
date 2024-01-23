import { useHome } from "../../../App/hooks/useHome";

export function useHomeController() {
  const { homeData, isLoading } = useHome();

  return { homeData, isLoading };
}
