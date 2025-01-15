export default function ModalDim({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 backdrop-opacity-100 backdrop-brightness-50 w-full h-screen z-20" />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        {children}
      </div>
    </>
  );
}
