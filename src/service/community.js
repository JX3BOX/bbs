import { $next, $cms } from "@jx3box/jx3box-common/js/https";

const API_PREFIX = `/api/next2/`;
// 获取公开的讨论主题帖子列表
const getTopicList = () => {
    return $next().get(`${API_PREFIX}community/discussion/topic/list`);
};

const createTopic = (params) => {
    return $next().post(`${API_PREFIX}/community/discussion/topic`, params);
};
// 获取自定义主题
function getTopicBucket(params) {
    return $cms().get(`/api/cms/topic/bucket`, { params });
}

export { getTopicList, createTopic, getTopicBucket };
