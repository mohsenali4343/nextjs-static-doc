export default function Installation() {
  return (
    <section id="installation" className="prose dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Installation</h1>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Using Package Manager</h2>
        <div className="bg-gray-900 rounded-lg p-4 mb-4">
          <pre className="text-gray-100 overflow-x-auto">
            <code>curl -sSL https://get.mnms.io | bash</code>
          </pre>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          This will install the latest stable version of MnMs on your system.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Manual Installation</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">1. Download the Package</h3>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-gray-100 overflow-x-auto">
                <code>wget https://download.mnms.io/latest/mnms-agent.tar.gz</code>
              </pre>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">2. Extract the Package</h3>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-gray-100 overflow-x-auto">
                <code>tar -xzf mnms-agent.tar.gz</code>
              </pre>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">3. Run the Installer</h3>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-gray-100 overflow-x-auto">
                <code>cd mnms-agent && sudo ./install.sh</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Verification</h3>
        <p className="text-yellow-800 dark:text-yellow-200 mb-4">
          After installation, verify that the MnMs agent is running correctly:
        </p>
        <div className="bg-gray-900 rounded-lg p-4">
          <pre className="text-gray-100 overflow-x-auto">
            <code>sudo systemctl status mnms-agent</code>
          </pre>
        </div>
      </div>
    </section>
  );
} 