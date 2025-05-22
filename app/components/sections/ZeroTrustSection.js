export default function ZeroTrustSection() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-r from-blue-100 to-blue-100 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <span className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 z-10">
           Security First
          </span>
         
        </div>
        
        <h2 className="text-5xl font-bold text-black mb-12 leading-tight animate-fade-in-up">
          Zero Trust Security Model
        </h2>
        
        <div className="space-y-8">
          <p className="text-xl text-gray-900/90 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-100">
            MnMs employs a sophisticated mutual TLS (mTLS) system managed by Business Owners, 
            establishing a robust two-factor security architecture. Our layered defense ensures 
            continuous verification, maintaining protection even if one component faces compromise.
          </p>
          
          <div className="mt-12 animate-fade-in-up delay-200">
            <div className="inline-flex items-center justify-center space-x-4">
              <div className="h-3 w-3 bg-emerald-700 rounded-full animate-pulse"></div>
              <span className="font-mono text-sm text-emerald-900/80">
                Active Protection Status: Secured
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
    </section>
  );
}