export function getStars(rating: number, maxStars: number) {
  return [...Array(maxStars)].map((_, i) => {
    if (rating - i >= 1) {
      return 'full'
    }

    return rating - i >= 0.5 ? 'half' : 'empty'
  })
}
