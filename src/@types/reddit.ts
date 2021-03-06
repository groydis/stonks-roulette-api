export type Resolution = {
  url: string,
  width: number,
  height: number
}

export type RedditAward = {
  giver_coin_reward: number,
  subreddit_id: string | null,
  is_new: boolean,
  days_of_drip_extension: number,
  coin_price: number,
  id: string,
  penny_donate: number,
  award_sub_type: string,
  coin_reward: number,
  icon_url: string,
  days_of_premium: number,
  tiers_by_required_awardings: string | null,
  resized_icons: Resolution[],
  icon_width: number,
  static_icon_width: number,
  start_date: string | null,
  is_enabled: boolean,
  awardings_required_to_grant_benefits: string | null,
  description: string,
  end_date: string | null,
  subreddit_coin_reward: number,
  count: number,
  static_icon_height: number,
  name: string,
  resized_static_icons: Resolution[],
  icon_format: string,
  icon_height: number,
  penny_price: number,
  award_type: string,
  static_icon_url: string
}

export type RedditDataObject = {
  approved_at_utc: string | null,
  subreddit: string,
  selftext: string,
  author_fullname: string,
  saved: boolean,
  mod_reason_title: null,
  gilded: number,
  clicked: boolean,
  title: string,
  link_flair_richtext: [],
  subreddit_name_prefixed: string,
  hidden: boolean,
  pwls: number,
  link_flair_css_class: string | null,
  downs: number,
  thumbnail_height: number,
  top_awarded_type: string | null,
  hide_score: boolean,
  name: string,
  quarantine: boolean,
  link_flair_text_color: string,
  upvote_ratio: number,
  author_flair_background_color: string | null,
  subreddit_type: string,
  ups: number,
  total_awards_received: number,
  media_embed: {},
  thumbnail_width: number,
  author_flair_template_id: string | null,
  is_original_content: boolean,
  user_reports: [],
  secure_media: Object,
  is_reddit_media_domain: boolean,
  is_meta: boolean,
  category: string | null,
  secure_media_embed: {},
  link_flair_text: string | null,
  can_mod_post: boolean,
  score: number,
  approved_by: string | null,
  is_created_from_ads_ui: boolean,
  author_premium: boolean,
  thumbnail: string,
  edited: number | false,
  author_flair_css_class: string | null,
  author_flair_richtext: Object[],
  gildings: Object,
  post_hint: string,
  content_categories: string | null,
  is_self: boolean,
  mod_note: string | null,
  crosspost_parent_list?: Object[],
  created: number,
  link_flair_type: string,
  wls: 6,
  removed_by_category: string | null,
  banned_by: string | null,
  author_flair_type: string,
  domain: string,
  allow_live_comments: boolean,
  selftext_html: string | null,
  likes: string | null,
  suggested_sort: string | null,
  banned_at_utc: string | null,
  url_overridden_by_dest: string,
  view_count: string | null,
  archived: boolean,
  no_follow: boolean,
  is_crosspostable: boolean,
  pinned: boolean,
  over_18: boolean,
  preview: {
    images: [
      {
        source: Resolution
        resolutions: Resolution[],
        variants: {},
        id: string
      }
    ],
    enabled: boolean
  },
  all_awardings: RedditAward[],
  awarders: [],
  media_only: boolean,
  can_gild: boolean,
  spoiler: boolean,
  locked: boolean,
  author_flair_text: string | null,
  treatment_tags: [],
  visited: boolean,
  removed_by: string | null,
  num_reports: string | null,
  distinguished: string | null,
  subreddit_id: string,
  author_is_blocked: boolean,
  mod_reason_by: string | null,
  removal_reason: string | null,
  link_flair_background_color: string,
  id: string,
  is_robot_indexable: boolean,
  report_reasons: string | null,
  author: string,
  discussion_type: string | null,
  num_comments: number,
  send_replies: boolean,
  whitelist_status: string,
  contest_mode: boolean,
  mod_reports: [],
  author_patreon_flair: boolean,
  crosspost_parent?: string,
  author_flair_text_color: string | null,
  permalink: string,
  parent_whitelist_status: string,
  stickied: boolean,
  url: string,
  subreddit_subscribers: number,
  created_utc: number,
  num_crossposts: number,
  media: {
    reddit_video: {
      bitrate_kbps: number,
      fallback_url: string,
      height: number,
      width: number,
      scrubber_media_url: string,
      dash_url: string,
      duration: number,
      hls_url: string,
      is_gif: boolean,
      transcoding_status: string
    }
  },
  is_video: boolean
}
export type RedditHeadline = {
  kind: string,
  data: RedditDataObject,
}
