# plots for book

rol <- read.csv("rol-scores.csv")

# GDP (logged)

rol$gdp.pc <- rol$X2012GDP/(rol$Pop..In.Millions.for.2012*1000000)
econ <- lm(log(RoLScore) ~ log(gdp.pc), data=rol)
plot(log(rol$gdp.pc), log(rol$RoLScore), xlab="Log 2012 GDP Per Capita", ylab="Log Rule of Law Score") 
abline(econ)

# GDP (not logged)
econ2 <- lm(RoLScore ~ gdp.pc, data=rol)
summary(econ2)
plot(rol$gdp.pc, rol$RoLScore, xlab="2012 GDP Per Capita", ylab="Rule of Law Score")
abline(econ2)

# personal autonomy
liberty <- lm(RoLScore ~ per_auto, data=rol)
plot(rol$per_auto, rol$RoLScore, xlab="Freedom House Personal Autonomy Score", ylab="Rule of Law Score") 
abline(liberty)

# electoral process
democracy1 <- lm(RoLScore ~ elec_pros, data=rol)
plot(rol$elec_pros, rol$RoLScore, xlab="Freedom House Electoral Process Score", ylab="Rule of Law Score") 
abline(democracy1)

# political pluralism
democracy2 <- lm(RoLScore ~ pol_plur, data=rol)
plot(rol$pol_plur, rol$RoLScore, xlab="Freedom House Political Pluralism and Participation Score", ylab="Rule of Law Score") 
abline(democracy2)

# property rights
property <- lm(RoLScore ~ hprop, data=rol)
plot(rol$hprop, rol$RoLScore, xlab="Heritage Foundation Property Rights Score", ylab="Rule of Law Score") 
abline(property)

# world map.  This code may be inaccurate: it took a lot of tries to get it working, and I didn't
# do proper version control or commenting. This is my best attempt to isolate the code that actually 
# worked without re-running.
rol2 <- read.csv("rol-scores.csv",stringsAsFactors=FALSE)
rol2$region <- rol2$State
rol2$region[rol2$region=="Australia "] = "Australia"
rol2$region[rol2$region=="United States"] = "United States of America"
library(rworldmap)
rolmap <- joinCountryData2Map(rol2, joinCode = "NAME", nameJoinColumn = "region")
mapCountryData(rolmap, nameColumnToPlot="RoLScore", colourPalette="black2White", numCats=30)

# WEB PLOTS
# all require further processing using plotly web interface.

library("devtools")
install_github("ropensci/plotly")
library(plotly)

# call to set_credentials_file() NOTE: OMITTED FOR SECURITY 
# PURPOSES FROM PUBLIC CODE, AS FULL CODE WOULD PROVIDE ACCESS TO MY 
# PLOTLY ACCOUNT.  (Get your own.)

# histogram of RoL Scores
library(ggplot2)
py <- plotly()
rolhisto <- ggplot(rol, aes(x = RoLScore)) +
  stat_bin(binwidth = 9)
rolhistoweb <- py$ggplotly(rolhisto)

# Individual Liberty
rol_lib <- list(
  list(
    x = rol$RoLScore, 
    y=rol$per_auto,
    mode= "markers",
    text = rol$State,
    type = "scatter"
  )
)
layout <- list(title = "Rule of Law and Personal Autonomy")
rol_libweb <- py$plotly(rol_lib, kwargs=list(layout=layout, filename="rol-auto"))
rol_libweb$url

# GDP
rol$logGDPpc <- log(rol$gdp.pc)
rol$logROL <- log(rol$RoLScore)
rol_gdp <- list(
  list(
    x = rol$logROL, 
    y=rol$logGDPpc,
    mode= "markers",
    text = rol$State,
    type = "scatter"
  )
)
layout <- list(title = "Rule of Law and GDP")
rol_gdpweb <- py$plotly(rol_gdp, kwargs=list(layout=layout, filename="rol-gdp"))
rol_gdpweb$url

# Electoral Process
rol_dem1 <- list(
  list(
    x = rol$RoLScore, 
    y=rol$elec_pros,
    mode= "markers",
    text = rol$State,
    type = "scatter"
  )
)
layout <- list(title = "Rule of Law and Electoral Process")
rol_dem1web <- py$plotly(rol_dem1, kwargs=list(layout=layout, filename="rol-dem1"))
rol_dem1web$url

# Political Pluralism
rol_dem2 <- list(
  list(
    x = rol$RoLScore, 
    y=rol$pol_plur,
    mode= "markers",
    text = rol$State,
    type = "scatter"
  )
)
layout <- list(title = "Rule of Law and Political Pluralism")
rol_dem2web <- py$plotly(rol_dem2, kwargs=list(layout=layout, filename="rol-dem2"))
rol_dem2web$url

# Property Rights
rol_property <- list(
  list(
    x = rol$RoLScore, 
    y=rol$hprop,
    mode= "markers",
    text = rol$State,
    type = "scatter"
  )
)
layout <- list(title = "Rule of Law and Property Rights")
rol_propertyweb <- py$plotly(rol_property, kwargs=list(layout=layout, filename="rol-property"))
rol_propertyweb$url

# Multidimensional chart
workingrol <- rol
dropme <- c('State', 'Pop..In.Millions.for.2012', 'logGDPpc', 'logROL', 'X2012GDP')
shrunkrol <- workingrol[,!(names(workingrol) %in% dropme)]
orderedrol <- shrunkrol[order(shrunkrol$RoLScore),]
scaledrol0 <- scale(orderedrol)
orderednames <- workingrol[order(workingrol$RoLScore),]$State
scaledrol <- as.data.frame(scaledrol0)
trace0democracy1 <- list(
  x = scaledrol$RoLScore,
  y = scaledrol$elec_pros,
  fill = "tozeroy",
  text = orderednames,
  type = "scatter"
)
trace1democracy2 <- list(
  x = scaledrol$RoLScore,
  y = scaledrol$pol_plur,
  fill = "tozeroy",
  text = orderednames,
  type = "scatter"
)
trace2property = list(
  x = scaledrol$RoLScore,
  y = scaledrol$hprop,
  fill = 'tonexty',
  text = orderednames,
  type = "scatter"
)
trace3liberty = list(
  x = scaledrol$RoLScore,
  y = scaledrol$per_auto,
  fill = 'tonexty',
  text = orderednames,
  type = "scatter"
)
trace4gdp = list(
  x = scaledrol$RoLScore,
  y = scaledrol$gdp.pc,
  fill = 'tonexty',
  text = orderednames,
  type = "scatter"
)
allinoneplotting <- list(trace0democracy1, trace1democracy2, trace2property, trace3liberty, trace4gdp)
allinoneplot <- py$plotly(allinoneplotting, kwargs=list(filename="all_in_one"))

# 3d scatterplot of the two democracy variables and rule of law

dastrace <- list(
  x = rol$RoLScore,
  y = rol$elec_pros,
  z = rol$pol_plur,
  text = rol$State,
  mode = "markers",
  marker = list(
    size = 12,
    line = list(
      color = "rgba(217, 217, 217, 0.14)",
      width = 0.5
    ),
    opacity = 0.8
  ),
  type = "scatter3d"
)

dasdata <- list(dastrace)

layout <- list(margin = list(
  l = 0,
  r = 0,
  b = 0,
  t = 0
))
response <- py$plotly(dasdata, kwargs=list(layout=layout, filename="demo3d-scatter2"))
response$url

