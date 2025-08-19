import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getCookie, setCookie } from "cookies-next"
import { useEffect, useCallback } from "react" // 1. 导入 useCallback
import { CONFIG } from "site.config"
import { queryKey } from "src/constants/queryKey"
import { SchemeType } from "src/types"

type SetScheme = (scheme: SchemeType) => void

const useScheme = (): [SchemeType, SetScheme] => {
  const queryClient = useQueryClient()
  const followsSystemTheme = CONFIG.blog.scheme === "system"

  const { data } = useQuery({
    queryKey: queryKey.scheme(),
    enabled: false,
    initialData: followsSystemTheme
      ? "dark"
      : (CONFIG.blog.scheme as SchemeType),
  })

  // 2. 使用 useCallback 包装 setScheme 函数
  const setScheme = useCallback((scheme: SchemeType) => {
    setCookie("scheme", scheme)

    queryClient.setQueryData(queryKey.scheme(), scheme)
  }, [queryClient]) // 3. 添加 useCallback 的依赖项

  useEffect(() => {
    if (!window) return

    const cachedScheme = getCookie("scheme") as SchemeType
    const defaultScheme = followsSystemTheme
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : data
    setScheme(cachedScheme || defaultScheme)
  }, [data, followsSystemTheme, setScheme])

  return [data, setScheme]
}

export default useScheme