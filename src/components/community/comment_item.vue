<template>
    <div>
        <div class="m-comment-wrapper">
            <!-- 帖子内容 s -->
            <div class="m-comment-wrapper__left">
                <CommentUser />
            </div>
            <div class="m-comment-wrapper__right">
                <div class="m-comment-wrapper__right-box">
                    <div class="u-layer">楼主</div>
                    <div class="u-content">
                        所以监听用户的截图操作，提示用户进行分享，既缩短了以前分享截图的操作路径，避免了在之前长路径中的行为流失（比如截图完成后忘记分享或觉得麻烦放弃分享等等），也让用户觉得更加贴心。现在很多APP在用户截图时会自动提示用户是否要进行分享。这个时机确实抓的很棒，一般来说，用户截图大多数时候都是为了分享给他人，少部分是为了留底备份。作为用户和产品之间的桥梁，社交分享在产品的发展过程中扮演
                    </div>
                    <div class="u-time">2024-01-02 20:00:00</div>
                    <div class="u-toolbar">
                        <div></div>
                        <div>
                            <el-button type="text" size="small">黑洞</el-button>
                            <el-button type="text" size="small">删除</el-button>
                            <el-button type="text" size="small">举报</el-button>
                            <el-button type="text" size="small">拉黑</el-button>
                            <el-button type="primary" size="small" class="u-reply-btn">
                                <div class="u-btn">
                                    <img src="@/assets/img/community/reply.svg" alt="" />
                                    <span>跟帖</span>
                                </div>
                            </el-button>
                            <el-button type="primary" size="small" class="u-praise-btn">
                                <div class="u-btn">
                                    <img src="@/assets/img/community/praise.svg" alt="" />
                                    <span>赞</span>
                                </div>
                            </el-button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 帖子内容 e -->
        </div>

        <!-- 帖子回复s -->
        <div class="m-reply-box">
            <!-- x楼 -->
            <div class="m-comment-wrapper">
                <div class="m-comment-wrapper__left">
                    <CommentUser />
                </div>
                <div class="m-comment-wrapper__right">
                    <div class="m-comment-wrapper__right-box">
                        <div class="u-layer">2楼</div>
                        <div class="u-content">
                            所以监听用户的截图操作，提示用户进行分享，既缩短了以前分享截图的操作路径，避免了在之前长路径中的行为流失（比如截图完成后忘记分享或觉得麻烦放弃分享等等），也让用户觉得更加贴心。现在很多APP在用户截图时会自动提示用户是否要进行分享。这个时机确实抓的很棒，一般来说，用户截图大多数时候都是为了分享给他人，少部分是为了留底备份。作为用户和产品之间的桥梁，社交分享在产品的发展过程中扮演
                        </div>

                        <div class="u-time">2024-01-02 20:00:00</div>

                        <div class="u-toolbar">
                            <div class="m-comment-toggle">
                                <img src="@/assets/img/community/toggle.svg" alt="" />
                                <span>折叠该评论</span>
                            </div>
                            <div>
                                <el-button type="text" size="small">黑洞</el-button>
                                <el-button type="text" size="small">删除</el-button>
                                <el-button type="text" size="small">举报</el-button>
                                <el-button type="text" size="small">拉黑</el-button>
                                <el-button type="primary" size="small" class="u-reply-btn">
                                    <div class="u-btn">
                                        <img src="@/assets/img/community/reply.svg" alt="" />
                                        <span>回复</span>
                                    </div>
                                </el-button>
                                <el-button type="primary" size="small" class="u-praise-btn">
                                    <div class="u-btn">
                                        <img src="@/assets/img/community/praise.svg" alt="" />
                                        <span>赞</span>
                                    </div>
                                </el-button>
                            </div>
                        </div>
                    </div>
                    <div class="m-reply-list">
                        <div class="m-comment-wrapper">
                            <div class="m-comment-wrapper__right">
                                <div class="m-comment-wrapper__right-box">
                                    <div class="m-reply-user">
                                        <img
                                            class="u-avatar"
                                            src="https://thirdwx.qlogo.cn/mmopen/vi_32/XVv97dQRkCiaC1R6nMP6zSbxuAgrFVegAj7LmEY7wtm5UjrdyLAW1UDZtXWGcTnPaYUoMl0CLITPrBYko4yEbDO0N1xSrQtjcfBkoDnianRqI/132?x-oss-process=image/auto-orient,1/resize,m_fill,w_360,h_360/quality,Q_100"
                                            alt=""
                                            srcset=""
                                        />
                                        <div>
                                            <p class="u-name">芝士饭团</p>
                                            <p class="u-content">所以监听用户的截图操作，提示用户进行分享.</p>
                                            <div class="u-toolbar">
                                                <div>
                                                    <el-button type="text" size="small">黑洞</el-button>
                                                    <el-button type="text" size="small">删除</el-button>
                                                    <el-button type="text" size="small">举报</el-button>
                                                    <el-button type="text" size="small">拉黑</el-button>
                                                </div>
                                                <div class="u-time">2024-01-02 20:00:00</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="m-comment-wrapper">
                            <div class="m-comment-wrapper__right">
                                <div class="m-comment-wrapper__right-box">
                                    <div class="m-reply-user">
                                        <img
                                            class="u-avatar"
                                            src="https://thirdwx.qlogo.cn/mmopen/vi_32/XVv97dQRkCiaC1R6nMP6zSbxuAgrFVegAj7LmEY7wtm5UjrdyLAW1UDZtXWGcTnPaYUoMl0CLITPrBYko4yEbDO0N1xSrQtjcfBkoDnianRqI/132?x-oss-process=image/auto-orient,1/resize,m_fill,w_360,h_360/quality,Q_100"
                                            alt=""
                                            srcset=""
                                        />
                                        <div>
                                            <p class="u-name">芝士饭团</p>
                                            <p class="u-content">
                                                所以监听用户的截图操作，提示用户进行分享，既缩短了以前分享截图的操作路径，避免了在之前长路径中的行为流失（比如截图完成后忘记分享或觉得麻烦放弃分享等等）
                                            </p>
                                            <div class="u-toolbar">
                                                <div>
                                                    <el-button type="text" size="small">黑洞</el-button>
                                                    <el-button type="text" size="small">删除</el-button>
                                                    <el-button type="text" size="small">举报</el-button>
                                                    <el-button type="text" size="small">拉黑</el-button>
                                                </div>
                                                <div class="u-time">2024-01-02 20:00:00</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- x楼 -->
            <div class="m-comment-wrapper">
                <div class="m-comment-wrapper__left">
                    <CommentUser />
                </div>
                <div class="m-comment-wrapper__right">
                    <div class="m-comment-wrapper__right-box">
                        <div class="u-layer">3楼</div>
                        <div class="u-content">
                            所以监听用户的截图操作，提示用户进行分享，既缩短了以前分享截图的操作路径，避免了在之前长路径中的行为流失（比如截图完成后忘记分享或觉得麻烦放弃分享等等），也让用户觉得更加贴心。现在很多APP在用户截图时会自动提示用户是否要进行分享。这个时机确实抓的很棒，一般来说，用户截图大多数时候都是为了分享给他人，少部分是为了留底备份。作为用户和产品之间的桥梁，社交分享在产品的发展过程中扮演
                        </div>

                        <div class="u-time">2024-01-02 20:00:00</div>

                        <div class="u-toolbar">
                            <div class="m-comment-toggle">
                                <!-- <img src="@/assets/img/community/toggle.svg" alt="" />
                                <span>折叠该评论</span> -->
                            </div>
                            <div>
                                <el-button type="text" size="small">黑洞</el-button>
                                <el-button type="text" size="small">删除</el-button>
                                <el-button type="text" size="small">举报</el-button>
                                <el-button type="text" size="small">拉黑</el-button>
                                <el-button type="primary" size="small" class="u-reply-btn">
                                    <div class="u-btn">
                                        <img src="@/assets/img/community/reply.svg" alt="" />
                                        <span>回复</span>
                                    </div>
                                </el-button>
                                <el-button type="primary" size="small" class="u-praise-btn">
                                    <div class="u-btn">
                                        <img src="@/assets/img/community/praise.svg" alt="" />
                                        <span>赞</span>
                                    </div>
                                </el-button>
                            </div>
                        </div>
                    </div>
                    <div class="m-reply-list"></div>
                </div>
            </div>
            <!-- x楼 -->
            <div class="m-comment-wrapper">
                <div class="m-comment-wrapper__left">
                    <CommentUser />
                </div>
                <div class="m-comment-wrapper__right">
                    <div class="m-comment-wrapper__right-box">
                        <div class="u-layer">2楼</div>
                        <div class="u-content">
                            所以监听用户的截图操作，提示用户进行分享，既缩短了以前分享截图的操作路径，避免了在之前长路径中的行为流失（比如截图完成后忘记分享或觉得麻烦放弃分享等等），也让用户觉得更加贴心。现在很多APP在用户截图时会自动提示用户是否要进行分享。这个时机确实抓的很棒，一般来说，用户截图大多数时候都是为了分享给他人，少部分是为了留底备份。作为用户和产品之间的桥梁，社交分享在产品的发展过程中扮演
                        </div>

                        <div class="u-time">2024-01-02 20:00:00</div>

                        <div class="u-toolbar">
                            <div class="m-comment-toggle">
                                <img src="@/assets/img/community/toggle.svg" alt="" />
                                <span>折叠该评论</span>
                            </div>
                            <div>
                                <el-button type="text" size="small">黑洞</el-button>
                                <el-button type="text" size="small">删除</el-button>
                                <el-button type="text" size="small">举报</el-button>
                                <el-button type="text" size="small">拉黑</el-button>
                                <el-button type="primary" size="small" class="u-reply-btn">
                                    <div class="u-btn">
                                        <img src="@/assets/img/community/reply.svg" alt="" />
                                        <span>回复</span>
                                    </div>
                                </el-button>
                                <el-button type="primary" size="small" class="u-praise-btn">
                                    <div class="u-btn">
                                        <img src="@/assets/img/community/praise.svg" alt="" />
                                        <span>赞</span>
                                    </div>
                                </el-button>
                            </div>
                        </div>
                    </div>
                    <div class="m-reply-list">
                        <div class="m-comment-wrapper">
                            <div class="m-comment-wrapper__right">
                                <div class="m-comment-wrapper__right-box">
                                    <div class="m-reply-user">
                                        <img
                                            class="u-avatar"
                                            src="https://thirdwx.qlogo.cn/mmopen/vi_32/XVv97dQRkCiaC1R6nMP6zSbxuAgrFVegAj7LmEY7wtm5UjrdyLAW1UDZtXWGcTnPaYUoMl0CLITPrBYko4yEbDO0N1xSrQtjcfBkoDnianRqI/132?x-oss-process=image/auto-orient,1/resize,m_fill,w_360,h_360/quality,Q_100"
                                            alt=""
                                            srcset=""
                                        />
                                        <div>
                                            <p class="u-name">芝士饭团</p>
                                            <p class="u-content">所以监听用户的截图操作，提示用户进行分享.</p>
                                            <div class="u-toolbar">
                                                <div>
                                                    <el-button type="text" size="small">黑洞</el-button>
                                                    <el-button type="text" size="small">删除</el-button>
                                                    <el-button type="text" size="small">举报</el-button>
                                                    <el-button type="text" size="small">拉黑</el-button>
                                                </div>
                                                <div class="u-time">2024-01-02 20:00:00</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 帖子回复e -->
    </div>
</template>

<script>
import CommentUser from "@/components/community/comment_user.vue";
export default {
    components: {
        CommentUser,
    },
};
</script>

<style lang="less">
@import "~@/assets/css/community/comment_item.less";
</style>
