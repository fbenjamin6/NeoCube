export function formatPrice(price: number) {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'usd',
    maximumFractionDigits: price < 1 ? 4 : 2,
  })
}
