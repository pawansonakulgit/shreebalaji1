const SectionHeader = ({ title, subtitle, centered = true, light = false }) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl font-bold mb-3 md:text-4xl ${light ? 'text-white' : 'text-slate-800'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
