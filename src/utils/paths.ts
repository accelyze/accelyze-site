const rawBase = import.meta.env.BASE_URL ?? "/";
const normalizedBase =
  rawBase === "/"
    ? "/"
    : rawBase.endsWith("/")
      ? rawBase
      : `${rawBase}/`;

const baseWithoutTrailingSlash =
  normalizedBase === "/" ? "" : normalizedBase.slice(0, -1);

export function withBase(path: string) {
  if (typeof path !== "string" || path.length === 0) {
    return path;
  }

  if (!path.startsWith("/")) {
    return path;
  }

  if (path === "/") {
    return normalizedBase;
  }

  const trimmedPath = path.replace(/^\/+/, "");

  return normalizedBase === "/" ? `/${trimmedPath}` : `${normalizedBase}${trimmedPath}`;
}

export function stripBase(pathname: string) {
  if (
    typeof pathname !== "string" ||
    normalizedBase === "/" ||
    !pathname.startsWith("/")
  ) {
    return pathname || "/";
  }

  if (pathname.startsWith(baseWithoutTrailingSlash)) {
    const stripped = pathname.slice(baseWithoutTrailingSlash.length);
    return stripped.length ? stripped : "/";
  }

  return pathname || "/";
}
