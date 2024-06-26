<template>
    <el-form ref="form" :model="newComment" class="c-comment-box m-comment-reply">
        <el-form-item>
            <el-input
                rows="6"
                type="textarea"
                :maxlength="maxLength"
                show-word-limit
                v-model="newComment.content"
                placeholder="参与讨论..."
                :id="inputId"
                ref="textarea"
            ></el-input>
            <div class="c-comment-tools">
                <div class="u-tools">
                    <i class="el-icon-picture-outline u-upload-icon" @click="showUploader = !showUploader"></i>
                    <Emotion class="c-comment-emotion" @selected="handleEmotionSelected" type="pop" :max="6"></Emotion>
                    <quickReply @reply="onQuickReply"></quickReply>
                </div>
            </div>
            <div class="u-toolbar">
                <el-button type="primary" @click="onSubmit" class="u-publish" :disabled="disableSubmitBtn">
                    跟帖
                </el-button>
            </div>
            <Uploader
                class="u-uploader"
                ref="uploader"
                @onFinish="attachmentUploadFinish"
                @onError="attachmentUplodError"
                v-if="showUploader"
            />
        </el-form-item>
    </el-form>
</template>

<script>
import Uploader from "./upload.vue";
import Emotion from "@jx3box/jx3box-emotion/src/Emotion.vue";
import quickReply from "./quick-reply.vue";

export default {
    name: "CommentInputForm",
    components: {
        Uploader,
        Emotion,
        quickReply,
    },
    props: {
        // 用于判定该评论组件是否在底部
        isBottom: {
            type: Boolean,
            default: false,
        },
    },
    mounted() {
        if (this.isBottom) this.inputId = "textarea-bottom";
    },
    data: function () {
        return {
            maxLength: 500,
            showUploader: false,
            disableSubmitBtn: false,
            newComment: {
                content: "",
            },
            inputId: "textarea-top",
            is_secret: false,
        };
    },
    methods: {
        onSubmit() {
            this.disableSubmitBtn = true;
            if (this.$refs.uploader) {
                this.$refs.uploader.upload();
            } else {
                this.attachmentUploadFinish([]);
            }
        },
        onQuickReply(item) {
            this.$emit("submit", {
                content: item,
                attachmentList: [],
                is_template: 1,
            });
        },
        // 文件上传完成后，进行数据提交
        attachmentUploadFinish(data) {
            const content = this.newComment.content?.replace(/\n/g, "<br>");
            this.$emit("submit", {
                content: content,
                is_secret: this.is_secret ? 1 : 0,
                attachmentList: data,
            });
            this.newComment = {
                content: "",
            };
            this.showUploader = false;

            this.disableSubmitBtn = false;
        },
        attachmentUplodError() {
            this.disableSubmitBtn = false;
        },
        // 处理表情
        handleEmotionSelected(key) {
            this.insertVariable(key);
        },
        /**
         * add emotion to textarea
         * @parma {string} emotionVal emotion key
         */
        async insertVariable(emotionVal) {
            // const myField = document.querySelector(`#${this.inputId}`);
            const myField = this.$refs.textarea.$el.querySelector("textarea");
            const value = emotionVal.key;
            if (myField.selectionStart || myField.selectionStart === 0) {
                let startPos = myField.selectionStart;
                let endPos = myField.selectionEnd;

                this.newComment.content =
                    myField.value.substring(0, startPos) +
                    value +
                    myField.value.substring(endPos, myField.value.length);

                await this.$nextTick();

                myField.focus();
                myField.setSelectionRange(endPos + value.length, endPos + value.length);
            } else {
                this.newComment.content = value;
            }
        },
    },
};
</script>

<style lang="less">
.m-comment-reply {
    .u-tools {
        .flex;
        width: 100%;
        align-items: center;
        overflow: hidden;
        height: 48px;
    }
    .u-upload-icon {
        font-size: 24px;
        cursor: pointer;
        margin-right: 10px;
        color: #3d454d;
    }
    .c-comment-secret {
        margin-left: 15px;
        .u-secret {
            display: flex;
            align-items: center;
            .el-checkbox__inner {
                display: block;
            }
        }
    }
    .c-comment-emotion {
        margin: 0;
        position: relative;
        top: 7px;
    }
    .u-publish {
        margin-bottom: 4px;
        background: #4080ff;
        border: 1px solid #4080ff;
        &:hover {
            opacity: 0.9;
        }
        .size(180px,42px);
    }
}
</style>
