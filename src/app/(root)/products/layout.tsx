import Breadcrumbs from "@/components/ui/breadcrumbs";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Breadcrumbs />
      {children}
    </div>
  );
};

export default Layout;
