POSITIONAL=()
while [[ $# -gt 0 ]]
do
key="$1"

case $key in
    --az)
    AZ="1"
    shift # past argument
    ;;
    --ca)
    CA="1"
    shift # past argument
    ;;
    --tx)
    TX="1"
    shift # past argument
    ;;
     -s|--singularity)
    SING="1"
    shift # past argument
    ;;
 
    *)    # unknown option
    POSITIONAL+=("$1") # save it in an array for later
    shift # past argument
    ;;
esac
done

# if set, run in singularity instead of docker
if [ -n "$SING" ]; then
  singularity pull docker://webrecorder/browsertrix-crawler:0.4.0-beta.0

  IMAGE=./browsertrix-crawler_0.4.0-beta.0.sif

  VOLUMES="--bind $PWD/driver:/driver"
  PORTS=""
  SCREENCAST=""
  WACZ="--generateWACZ"
  RUN="singularity run"
else
  IMAGE=webrecorder/browsertrix-crawler:0.4.0-beta.0
  #docker pull $IMAGE

  VOLUMES="-v $PWD/crawls:/crawls -v $PWD/driver:/driver"
  PORTS="-p 9037:9037"
  SCREENCAST="--screencastPort 9037"
  WACZ="--generateWACZ"
  RUN="docker run"
fi

if [ -n "$AZ" ]; then
$RUN $PORTS $VOLUMES $IMAGE crawl $SCREENCAST $WACZ \
 --url http://www.azdhs.gov/covid19/data/index.php\
 --driver /driver/az.js\
 --collection az\
 --behaviors ""\
 --exclude '(sidebar-nav|contentHead|search)'\
 --spaMode
fi


if [ -n "$CA" ]; then
$RUN $PORTS $VOLUMES $IMAGE crawl $SCREENCAST $WACZ \
 --url https://covid19.ca.gov/data-and-tools/\
 --driver /driver/ca.js\
 --collection ca\
 --behaviors ""\
 --scope 'https://public.tableau.com/(views/|(?:profile/ca.open.data#!/vizhome/COVID-19CasesDashboardv2_0/CaseStatistics))'\
 --allowHash
fi

if [ -n "$TX" ]; then
$RUN $PORTS $VOLUMES $IMAGE crawl $SCREENCAST $WACZ \
 --url https://txdshs.maps.arcgis.com/apps/dashboards/ed483ecd702b4298ab01e8b9cafc8b83\
 --driver /driver/tx.js\
 --collection tx\
 --behaviors ""\
 --limit 1
fi


