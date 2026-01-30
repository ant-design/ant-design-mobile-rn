import InternalSkeleton from './Skeleton'
import InternalSkeletonParagraph from './SkeletonParagraph'
import InternalSkeletonTitle from './SkeletonTitle'

const Title = InternalSkeletonTitle as typeof InternalSkeletonTitle
const Paragraph = InternalSkeletonParagraph as typeof InternalSkeletonParagraph
const Skeleton = InternalSkeleton as typeof InternalSkeleton & {
  Title: typeof Title
  Paragraph: typeof Paragraph
}

Skeleton.Title = Title
Skeleton.Paragraph = Paragraph

export default Skeleton
