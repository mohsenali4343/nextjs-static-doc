export default function GettingStarted() {
  return (
    <section id="getting-started" className="prose dark:prose-invert max-w-none">
      {/* Overview Section */}
      <div className="mb-24">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-tight">
          MnMs.io Documentation
        </h1>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-10 mb-8 border border-gray-100 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-300 text-xl leading-relaxed">
            MnMs (Monitoring and Management System) is a secure, no-login-required DevOps platform that allows teams to monitor and manage production machines while preserving strict separation of access among stakeholders. MnMs enforces Zero-Trust security principles and supports safe, script-based management.
          </p>
        </div>
      </div>

      {/* Stakeholder Roles */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 tracking-tight">Stakeholder Roles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {[
            {
              role: 'Business Owners',
              desc: 'Own the data; control access and security credentials.'
            },
            {
              role: 'DevOps',
              desc: 'Operate and manage the system without direct data access.'
            },
            {
              role: 'App Developers',
              desc: 'Build and maintain the application.'
            },
            {
              role: 'Infrastructure Providers',
              desc: 'Provision and manage physical/root-level machine access.'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 tracking-tight">{item.role}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 tracking-tight">Architecture</h2>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-10 mb-8 border border-gray-100 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-300 text-xl leading-relaxed mb-10">
            MnMs uses a lightweight "Trusted Agent" that runs on all production machines.
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 tracking-tight">Components</h3>
          <ul className="space-y-8 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-4 text-xl">•</span>
              <div>
                <strong className="text-gray-900 dark:text-white block mb-2 text-lg">Trusted Agent</strong>
                <span className="text-lg">Installed on production machines with root access; open-source.</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-4 text-xl">•</span>
              <div>
                <strong className="text-gray-900 dark:text-white block mb-2 text-lg">Monitoring Client</strong>
                <span className="text-lg">Collects system data and sends it to the Monitoring Server.</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-4 text-xl">•</span>
              <div>
                <strong className="text-gray-900 dark:text-white block mb-2 text-lg">Monitoring Server</strong>
                <span className="text-lg">Cloud-based server aggregating monitoring data.</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-4 text-xl">•</span>
              <div>
                <strong className="text-gray-900 dark:text-white block mb-2 text-lg">Management Agent</strong>
                <span className="text-lg">Executes safe, pre-defined scripts for operations tasks.</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-4 text-xl">•</span>
              <div>
                <strong className="text-gray-900 dark:text-white block mb-2 text-lg">Manager</strong>
                <span className="text-lg">Cloud-side controller for Management Agents.</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-10 border border-gray-100 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 tracking-tight">Access Model</h3>
          <ul className="space-y-8 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-4 text-xl">•</span>
              <div>
                <strong className="text-gray-900 dark:text-white text-lg">DevOps</strong> interact with MnMs via a GUI and an API.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-4 text-xl">•</span>
              <div>
                <strong className="text-gray-900 dark:text-white text-lg">No direct login</strong> to production machines is required or allowed.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-4 text-xl">•</span>
              <div>
                <strong className="text-gray-900 dark:text-white text-lg">Only enumerated, validated scripts</strong> can be executed.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Deployment Lifecycle */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 tracking-tight">Deployment Lifecycle</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {[
            {
              role: 'Infrastructure Provider',
              steps: ['Creates machine images with MnMs Trusted Agent and secrets.', 'Instantiates or provides machines to DevOps.']
            },
            {
              role: 'App Developers',
              steps: ['Deliver production app builds and continuous updates.']
            },
            {
              role: 'Business Owners',
              steps: ['Customize the app and manage secrets.', 'Own all data collected.']
            },
            {
              role: 'DevOps',
              steps: ['Operate and manage machines exclusively through MnMs servers.']
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">{item.role}</h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                {item.steps.map((step, stepIdx) => (
                  <li key={stepIdx} className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 text-lg">•</span>
                    <span className="leading-relaxed text-lg">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 tracking-tight">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'OS-Level Security Enforcement',
              features: [
                'Unique OS-level user accounts for every process.',
                'Enforces Least Access Privilege.'
              ]
            },
            {
              title: 'Peer Authentication for Databases',
              features: [
                'Uses OS-level credentials for DB access.',
                'Eliminates need for hardcoded passwords or .env secrets.'
              ]
            },
            {
              title: 'Multi-Tenant & Microservice Support',
              features: [
                'Processes and databases are sandboxed by OS user.',
                'Allows multiple apps or tenants on the same machine securely.'
              ]
            },
            {
              title: 'Full Observability',
              features: [
                'Instrumentation throughout request flows.',
                'OpenTelemetry support.'
              ]
            },
            {
              title: 'Safe-Script Framework',
              features: [
                'Pre-validated and sanitized',
                'Logged in sudo logs',
                'Configurable for append-only remote logs',
                'Extensible by Business Owners'
              ]
            },
            {
              title: 'Zero-Trust with mTLS Authentication',
              features: [
                'mTLS between all production elements.',
                'Two-Factor Authentication using DevOps and Business Owner credentials.',
                'Prevents full access compromise from either side.'
              ]
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">{feature.title}</h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                {feature.features.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 text-lg">•</span>
                    <span className="leading-relaxed text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 tracking-tight">Next Steps</h2>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-10 border border-gray-100 dark:border-gray-700">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Install Guide',
              'Safe Script Library',
              'API Reference',
              'Architecture Diagram (coming soon)',
              'Contribute Trusted Agent Code'
            ].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group text-lg"
              >
                <span className="mr-3 transform group-hover:translate-x-1 transition-transform">→</span>
                <span className="font-medium">{item}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 