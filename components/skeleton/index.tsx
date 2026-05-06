import InternalSkeleton from './Skeleton'
import InternalSkeletonParagraph from './SkeletonParagraph'
import InternalSkeletonProvider from './SkeletonProvider'
import InternalSkeletonTitle from './SkeletonTitle'

const Title = InternalSkeletonTitle as typeof InternalSkeletonTitle
const Paragraph = InternalSkeletonParagraph as typeof InternalSkeletonParagraph
const Provider = InternalSkeletonProvider as typeof InternalSkeletonProvider
const Skeleton = InternalSkeleton as typeof InternalSkeleton & {
  Title: typeof Title
  Paragraph: typeof Paragraph
  Provider: typeof Provider
}

Skeleton.Title = Title
Skeleton.Paragraph = Paragraph
Skeleton.Provider = Provider

export default Skeleton
