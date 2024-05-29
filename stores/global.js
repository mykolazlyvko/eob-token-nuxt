import { defineStore } from "pinia";
import { axiosService } from "~/services/axiosService";
import moment from "moment";

const useGlobalStore = defineStore("global", {
    state: () => ({
        inviteCodeIssuedToday: 0,
        lastJoinedUsers: [],
    }),
    getters: {
        getInviteCodeIssuedToday: (state) => state.inviteCodeIssuedToday,
        getLastJoinedUsers: (state) => state.lastJoinedUsers,
    },
    actions: {
        async fetchLastJoinedUsers() {
            try {
                const result = await axiosService.get(
                    useRuntimeConfig().public.BASE_API_URL +
                        "getLastJoinedUsers"
                );
                this.lastJoinedUsers = result.data;
            } catch (e) {
                console.log(e);
            }
        },
        async fetchInviteCodeIssuedToday() {
            try {
                const result = await axiosService.get(
                    useRuntimeConfig().public.BASE_API_URL +
                        "getInviteCodeIssuedToday"
                );
                this.inviteCodeIssuedToday = result.data;
            } catch (e) {
                console.log(e);
            }
        },
        getDateDiffer(date) {
            let fromTime = moment(date).diff(moment(), "milliseconds");
            let duration = moment.duration(fromTime);
            let string = "";
            if (duration.years() / -1)
                string = duration.years() / -1 + " years ago";
            else if (duration.months() / -1)
                string = duration.months() / -1 + " months ago";
            else if (duration.days() / -1)
                string = duration.days() / -1 + " days ago";
            else if (duration.hours() / -1)
                string = duration.hours() / -1 + " hours ago";
            else if (duration.minutes() / -1)
                string = duration.minutes() / -1 + " minutes ago";
            else if (duration.seconds() / -1)
                string = duration.seconds() / -1 + " seconds ago";

            return string;
        },
    },
});

export default useGlobalStore;
