<template>
    <div class="m-comment-item__user">
        <div class="u-userinfo">
            <img
                class="u-avatar"
                src="https://thirdwx.qlogo.cn/mmopen/vi_32/XVv97dQRkCiaC1R6nMP6zSbxuAgrFVegAj7LmEY7wtm5UjrdyLAW1UDZtXWGcTnPaYUoMl0CLITPrBYko4yEbDO0N1xSrQtjcfBkoDnianRqI/132?x-oss-process=image/auto-orient,1/resize,m_fill,w_360,h_360/quality,Q_100"
                alt="avatar"
            />
            <div class="u-info">
                <p class="u-name">芝士饭团</p>
                <p class="u-other">
                    <span class="u-lv">Lv.4</span>
                    <span class="u-vip">PRO</span>
                </p>
                <p class="u-medals">
                    <el-tooltip class="item" effect="dark" content="达摩洞百强团队成员" placement="top">
                        <img
                            src="https://img.js.design/assets/img/6618ebca760483d015860819.gif#dda55e95966e0b843f6012575f3a9890"
                            alt=""
                        />
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="达摩洞百强团队成员" placement="top">
                        <img
                            src="https://img.js.design/assets/img/6618ebca760483d015860819.gif#dda55e95966e0b843f6012575f3a9890"
                            alt=""
                        />
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="达摩洞百强团队成员" placement="top">
                        <img
                            src="https://img.js.design/assets/img/6618ebca760483d015860819.gif#dda55e95966e0b843f6012575f3a9890"
                            alt=""
                        />
                    </el-tooltip>
                </p>
            </div>
        </div>

        <img
            class="u-honour"
            src="https://img.js.design/assets/img/6618ec744eb2224151864807.png#f4663c4b17ba6d2588ba059d26156ad9"
            alt=""
        />
        <p class="u-desc">寒蝉凄切，对长亭晚，骤雨初歇。</p>
        <div>
            <el-button size="small" type="primary" icon="el-icon-plus">关注</el-button>
            <el-button size="small" icon="el-icon-message">私信</el-button>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import "~@/assets/css/community/comment_user.less";
</style>
