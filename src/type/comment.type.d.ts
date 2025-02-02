type movieDetailCommentList = {
  id: number;
  page: number;
  results: movieDetailComment[];
};

type movieDetailComment = {
  author: string;
  author_details: {
    name: string | null;
    username: string;
    avatar_path: string | null;
    rating: number | null;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
};
