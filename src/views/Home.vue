<template>
  <section class="section outline-points">
    <outline-point :point="point" />
  </section>
</template>

<script>
  // @ is an alias to /src
  export default {
    name: 'Home',
    data: function() {
      return {
        point: {
          pt_id: 'a100',
          pt_label: 'System:',
          pt_title: 'System Domain Outliner',
          pt_descr: '',
          sub_points: [
            {
              pt_id: 'a101',
              pt_label: 'Sub-system:',
              pt_title: 'System Infrastructure',
              pt_descr:
                'Basic UI, API and XHR tasks including Auth and Access control',
              sub_points: [
                {
                  pt_id: 'a103',
                  pt_label: 'Task Group:',
                  pt_title: 'API Framework',
                  pt_descr: '',
                  sub_points: [],
                },
                {
                  pt_id: 'a104',
                  pt_label: 'Task Group:',
                  pt_title: 'UI Framework',
                  pt_descr: '',
                  sub_points: [],
                },
                {
                  pt_id: 'a105',
                  pt_label: 'Task Group:',
                  pt_title: 'XHR Framework',
                  pt_descr: '',
                  sub_points: [],
                },
              ],
            },
            {
              pt_id: 'a102',
              pt_label: 'Task Group:',
              pt_title: 'User Management',
              pt_descr: 'Registration, Login, Logout, Lost Password, etc.',
              sub_points: [
                {
                  pt_id: 'a106',
                  pt_label: 'Task:',
                  pt_title: 'Register New User',
                  pt_descr: '',
                  sub_points: [],
                },
                {
                  pt_id: 'a107',
                  pt_label: 'Task:',
                  pt_title: 'User Log In',
                  pt_descr: '',
                  sub_points: [],
                },
                {
                  pt_id: 'a108',
                  pt_label: 'Task:',
                  pt_title: 'User Log Out',
                  pt_descr: '',
                  sub_points: [],
                },
                {
                  pt_id: 'a109',
                  pt_label: 'Task:',
                  pt_title: 'User Forgot Password',
                  pt_descr: '',
                  sub_points: [],
                },
              ],
            },
          ],
        },
      }
    },
  }
</script>

<style lang="scss"></style>
