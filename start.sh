#!/bin/bash
git pull

PID=`ps -ef|grep node|grep app.mjs|awk '{print $2}'`

echo -e "Kill PID=$PID"
if [ "$PID" !=  "" ] ;then
  kill ${PID}
  for ((i=1;i<=20;i++))
        do
          sleep 1;
          echo -e "Wait for Exit (${i}s)."

          if [ $(ps -fp ${PID} 2>/dev/null | grep -c 'startAPI') -eq 0 ];then
                echo -e "Success Kill PID=${PID} Done."
                break;
          fi
  done
fi

nohup node --experimental-modules src/app.mjs & > /dev/null &