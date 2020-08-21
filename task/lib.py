import datetime

class TimeScheduleBS4:

    def __init__(
            self, minute_height=1, hours=None, schedule_color='bg-info', step=1
    ):
        """初期化.
        引数:
        minute_height: 1分の高さ(px)。1ならば1時間が60px、全体で1440px
        hours: スケジュールに記載する時間の幅。range(6, 13)だと6〜12時まで
        schedule_color: スケジュールがある場合の背景色
        step: 何分毎にdivタグを入れるか。デフォルトは1分毎に1divタグ
              1に近いほどdivタグが多くなりパフォーマンスが落ちるが、細かい時間
              でも色をつけることができる
        """
        if hours is None:
            self.hours = [x for x in range(24)]
        else:
            self.hours = hours
        self.step = step
        self.minute_height = minute_height
        self.hour_height = self.minute_height * 60
        self.max_height = self.hour_height * len(self.hours)
        self.schedule_color = schedule_color

        def convert(self, obj):
            """(開始時間、終了時間、スケジュールテキスト)のタプルを返す.
            format_schedueメソッドに渡した各scheduleオブジェクトを
            (開始時間, 終了時間,テキスト)の形に変換するためのメソッド
            return obj.start, obj.end, obj.text
            return obj['start'], obj['end'], obj['title']+obj['text']
            のようにしてください
            """
            message = '{}~{}<br>{}'.format(
                obj.start_time, obj.end_time, obj.title
            )
            return obj.start_time, obj.end_time, message

        def format_hour_name(self, hour):
            div = 'div style="height:{0}px;" class="hour-name">{1}:00</div>'
