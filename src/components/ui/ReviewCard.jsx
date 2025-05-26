import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

const ReviewCard = ({ name, date, rating, review, verified = true }) => {
  // Generate stars based on rating
  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />)
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />)
    }

    // Add empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />)
    }

    return stars
  }

  return (
    <div
      className="p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
    >
      <div className="flex items-center mb-4">
        <div className="flex mr-2">
          {renderStars(rating)}
        </div>
        <span className="text-slate-600 text-sm">({rating})</span>
      </div>

      <p className="mb-4 text-slate-700">{review}</p>

      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium text-slate-900">{name}</p>
          <p className="text-sm text-slate-500">{date}</p>
        </div>
        {verified && (
          <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
            Verified Customer
          </span>
        )}
      </div>
    </div>
  )
}

export default ReviewCard
