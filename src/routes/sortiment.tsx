import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/sortiment")({
  component: SortimentLayout,
});

function SortimentLayout() {
  return <Outlet />;
}
