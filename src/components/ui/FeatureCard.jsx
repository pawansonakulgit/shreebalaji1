const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-5">
      <div className="p-3 mb-4 text-primary-600 bg-primary-100 rounded-full">
        <Icon size={26} />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-slate-800">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  )
}

export default FeatureCard
