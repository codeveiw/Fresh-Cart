export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50/30">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="mb-10 text-center">
          <div className="mx-auto h-10 w-64 animate-pulse rounded-lg bg-gray-200 sm:h-12" />
          <div className="mx-auto mt-4 h-6 w-96 animate-pulse rounded-lg bg-gray-200" />
        </div>

       
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
            >
            
              <div className="relative aspect-[4/5] w-full bg-gray-100 animate-pulse" />

              {/* Content Skeleton */}
              <div className="flex flex-1 flex-col p-5 space-y-3">
               
                <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />

               
                <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />

                {/* Footer (Rating + Price) */}
                <div className="mt-auto flex items-end justify-between pt-2">
                  <div className="flex flex-col gap-2">
                    
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div key={star} className="h-3 w-3 animate-pulse rounded-full bg-gray-200" />
                      ))}
                    </div>
                    
                    <div className="h-6 w-16 animate-pulse rounded bg-gray-200" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
