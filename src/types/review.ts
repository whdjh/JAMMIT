export interface ReviewPros {
  id: number;
  reviewerId: number;
  reviewerNickname: string;
  // reviewerImage: string;
  revieweeId: number;
  revieweeNickname: string;
  gatheringId: number;
  gatheringName: string;
  score: number;
  content: string;
  isPracticeHelped: boolean;
  isGoodWithMusic: boolean;
  isGoodWithOthers: boolean;
  isSharesPracticeResources: boolean;
  isManagingWell: boolean;
  isHelpful: boolean;
  isGoodLearner: boolean;
  isKeepingPromises: boolean;
  createdAt: string;
  updatedAt: string;
}
