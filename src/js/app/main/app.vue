<template>
    <div class="text-center" style="margin-top:200px;">
        <button type="button" class="btn btn-sm btn-info" @click="info">提示</button>
        <button type="button" class="btn btn-sm btn-success" @click="success">成功</button>
        <button type="button" class="btn btn-sm btn-danger" @click="error">失败</button>
        <button type="button" class="btn btn-sm btn-warning" @click="warn">警告</button>
        <button type="button" class="btn btn-sm btn-warning" @click="notVuePlugin">notVuePlugin</button>
    </div>
</template>
<script>
    import MiniMsg from 'main';

    export default{
        methods: {
            info(){
                this.$minimsg({
                    content: '操作提示，将为您刷新页面...',
                    type: 'info',
                    duration: 2
                });
            },
            success(){
                this.$minimsg({
                    content: '操作成功，将为您刷新页面...',
                    type: 'success',
                    duration: 2
                });
            },
            error(){
                this.$minimsg({
                    content: '操作失败，将为您刷新页面...',
                    type: 'error',
                    duration: 2
                });
            },
            warn(){
                this.$minimsg({
                    content: '操作警告，将为您刷新页面...',
                    type: 'warning',
                    duration: 2
                });
            },
            notVuePlugin(){
                new MiniMsg({
                    content: 'notVuePlugin操作成功，将为您刷新页面...',
                    type: 'success',
                    duration: 2
                }).animation();
            }
        }
    };
</script>
