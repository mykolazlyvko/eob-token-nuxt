<template>
    <div class="workflow-layout">
        <div class="eobo-layout">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="flex flex-col justify-center">
                    <h2 class="title-font font-bold text-4xl uppercase">
                        {{ $t("workflow.how_it_works") }}
                    </h2>
                    <p
                        class="text-base lg:text-xl md:w-5/6 lg:w-4/5 mt-6 lg:mt-8"
                        v-html="$t('workflow.description')"
                    ></p>
                    <img
                        src="/assets/images/homepage/roadmap.svg"
                        alt=""
                        class="roadmap mt-24 mb-12"
                    />
                </div>
                <div class="justify-center items-center hidden md:flex">
                    <img
                        src="/assets/images/homepage/workflow.svg"
                        alt=""
                        class="max-h-screen"
                    />
                </div>
                <div class="justify-center items-center md:hidden flex mt-12">
                    <img
                        src="/assets/images/homepage/workflow-mobile.svg"
                        alt=""
                        class="max-h-screen"
                    />
                </div> 
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.workflow-layout {
    padding-top: 50px;
}

.roadmap {
    width: 100%;
    max-width: 480px;
}
</style>
