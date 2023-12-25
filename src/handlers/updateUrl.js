export default function updateUrl(path, navigate) {
    const params = new URLSearchParams(path);
    const queryString = `?${params.toString()}`;
    navigate(`${queryString}`);
  }