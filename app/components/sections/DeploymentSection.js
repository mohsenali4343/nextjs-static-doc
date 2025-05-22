export default function DeploymentSection() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Deployment Lifecycle</h2>
      <ol className="space-y-6 max-w-4xl mx-auto list-decimal list-inside text-gray-700">
        <li>Infrastructure Provider sets up machine images with Trusted Agent.</li>
        <li>App Developers provide production builds and updates.</li>
        <li>Business Owners configure secrets and deployments.</li>
        <li>DevOps operate machines securely through MnMs Server.</li>
      </ol>
    </section>
  );
} 