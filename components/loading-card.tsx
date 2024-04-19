export const LoadingCard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {[...Array(2)].map((_, i) => (
        <div
          key={i}
          className="mt-12 border border-gray-300 shadow rounded-md p-4 max-w-sm w-full"
        >
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-gray-400 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-gray-400 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-gray-400 rounded col-span-3"></div>
                  <div className="h-2 bg-gray-400 rounded col-span-2"></div>
                  <div className="h-2 bg-gray-400 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-gray-400 rounded"></div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-gray-400 rounded col-span-2"></div>
                  <div className="h-2 bg-gray-400 rounded col-span-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
