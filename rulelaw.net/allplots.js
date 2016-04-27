var ordered_countries = ["Zimbabwe", "Venezuela", "Cambodia", "Cameroon", "Nigeria", "Uzbekistan", "Bangladesh ", "Nicaragua", "Ethiopia", "Bolivia ", "Uganda", "Pakistan", "Liberia", "El Salvador ", "Russia", "Kenya ", "Kyrgyzstan", "Cote d'Ivoire", "Mexico", "Kazakhstan", "Morocco ", "Tanzania", "Ecuador", "Moldova", "China", "Zambia", "Guatemala", "Philippines", "India ", "Ukraine", "Malawi", "Sierra Leone", "Albania ", "Nepal", "Burkina Faso", "Egypt", "Indonesia ", "Panama", "Mongolia", "Senegal", "Peru", "Jamaica", "Madagascar", "Colombia ", "Bulgaria ", "Dominican Republic", "Turkey ", "Serbia", "Tunisia", "Sri Lanka", "Malaysia", "Ghana", "South Africa", "Brazil", "Argentina", "Lebanon", "Macedonia", "Bosnia and Herzegovina", "Croatia ", "Hungary", "Greece", "Botswana", "Romania", "Georgia", "Portugal", "United States", "Uruguay", "Italy", "Chile", "Slovenia", "Czech Republic", "Canada", "South Korea", "France", "Spain", "Hong Kong", "Singapore", "Japan", "Poland", "Estonia", "United Kingdom", "Austria", "Australia ", "Belgium", "New Zealand", "Germany", "Denmark", "Netherlands ", "Finland", "Norway", "Sweden"]

var abc_countries = ["Albania ", "Argentina", "Australia ", "Austria", "Bangladesh ", "Belgium", "Bolivia ", "Bosnia and Herzegovina", "Botswana", "Brazil", "Bulgaria ", "Burkina Faso", "Cambodia", "Cameroon", "Canada", "Chile", "China", "Colombia ", "Cote d'Ivoire", "Croatia ", "Czech Republic", "Denmark", "Dominican Republic", "Ecuador", "Egypt", "El Salvador ", "Estonia", "Ethiopia", "Finland", "France", "Georgia", "Germany", "Ghana", "Greece", "Guatemala", "Hong Kong", "Hungary", "India ", "Indonesia ", "Italy", "Jamaica", "Japan", "Kazakhstan", "Kenya ", "Kyrgyzstan", "Lebanon", "Liberia", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Mexico", "Moldova", "Mongolia", "Morocco ", "Nepal", "Netherlands ", "New Zealand", "Nicaragua", "Nigeria", "Norway", "Pakistan", "Panama", "Peru", "Philippines", "Poland", "Portugal", "Romania", "Russia", "Senegal", "Serbia", "Sierra Leone", "Singapore", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "Sweden", "Tanzania", "Tunisia", "Turkey ", "Uganda", "Ukraine", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Venezuela", "Zambia", "Zimbabwe"]

var abc_rolscores = [42.6, 51.94, 73.28, 73.15, 31.57, 73.57, 33.51, 55.77, 60.56, 51.83, 47.26, 44.12, 28.69, 29.65, 70.03, 65.99, 39.33, 47.03, 36.55, 57.44, 69.03, 80.48, 49.17, 39.11, 44.13, 34.75, 72.98, 33.43, 82.27, 71.23, 61.44, 76.93, 51.2, 58.21, 39.67, 71.74, 58.06, 40.72, 44.41, 65.06, 46.95, 72.04, 37.81, 35.76, 36.22, 52.07, 34.1, 54.11, 46.96, 41.33, 50.72, 37.47, 39.21, 46.01, 38.6, 43.46, 80.57, 76.33, 32.62, 30.17, 83.61, 33.68, 45.41, 46.72, 39.96, 72.95, 62.96, 60.79, 35.53, 46.01, 49.58, 42.3, 71.95, 66.52, 51.68, 70.74, 71.26, 50.55, 83.85, 39.07, 50.42, 49.22, 33.57, 40.8, 73.13, 63.08, 64.81, 30.43, 27.84, 39.62, 26.66]

var sd_ordered_rol = [-1.59155687351, -1.51689615239, -1.46311512446, -1.4023741988, -1.36947286407, -1.3530221967, -1.28089234748, -1.21445696005, -1.16320680402, -1.15814506022, -1.15434875236, -1.14738885463, -1.12081469965, -1.07968803124, -1.03033602914, -1.0157835157, -0.986678488825, -0.96579879563, -0.907588741874, -0.886076330703, -0.83609161063, -0.806353865776, -0.803822993873, -0.797495814117, -0.78990319841, -0.771554377117, -0.768390787239, -0.750041965946, -0.7019553998, -0.696893655995, -0.663359603288, -0.601985959653, -0.583004420385, -0.528590674482, -0.486831288092, -0.486198570116, -0.468482466799, -0.405210669238, -0.367247590701, -0.367247590701, -0.322324614433, -0.307772100994, -0.307139383018, -0.302710357189, -0.28815784375, -0.167308710408, -0.16414512053, -0.141367273408, -0.0882189634567, -0.0799936297738, -0.0692374241884, -0.038866961359, -0.00849649852964, 0.000994271104532, 0.00795416883626, 0.0161795025192, 0.145253969544, 0.250285153496, 0.355949055423, 0.395177569911, 0.404668339545, 0.553357063814, 0.567909577253, 0.609036245667, 0.70520937796, 0.712801993668, 0.822262203448, 0.838080152839, 0.896922924571, 0.930456977278, 1.08926918916, 1.15254098672, 1.19746396299, 1.22846714379, 1.23036529772, 1.26073576055, 1.27402283804, 1.27971729982, 1.3372946356, 1.33919278952, 1.34868355916, 1.34994899511, 1.35817432879, 1.37652315008, 1.55115331135, 1.58911638989, 1.81373127123, 1.81942573301, 1.92698778887, 2.0117719976, 2.02695722901]

var abc_plur = [10, 15, 15, 15, 11, 16, 11, 10, 11, 14, 15, 7, 3, 3, 16, 15, 1, 10, 4, 15, 15, 16, 12, 13, 7, 14, 15, 2, 16, 15, 9, 15, 15, 15, 10, 7, 15, 14, 13, 15, 13, 15, 3, 10, 7, 9, 11, 11, 5, 11, 8, 12, 12, 15, 7, 11, 16, 15, 7, 9, 16, 9, 15, 13, 10, 16, 16, 14, 3, 12, 14, 11, 8, 15, 14, 15, 16, 6, 16, 12, 12, 10, 7, 10, 16, 16, 16, 0, 8, 13, 4]

var abc_elec = [8, 11, 12, 12, 9, 12, 11, 8, 10, 11, 11, 5, 3, 2, 12, 12, 0, 10, 5, 12, 12, 12, 10, 8, 2, 12, 12, 1, 12, 12, 6, 12, 12, 12, 9, 3, 12, 11, 11, 11, 12, 12, 2, 6, 6, 5, 9, 8, 1, 7, 6, 10, 11, 10, 4, 6, 12, 12, 6, 6, 12, 6, 12, 10, 9, 12, 12, 12, 1, 9, 9, 10, 4, 12, 12, 11, 12, 6, 12, 9, 9, 11, 3, 9, 12, 11, 12, 0, 6, 9, 2]

var comb_trace1 = {
  x: sd_ordered_rol, 
  y: [-1.86220920967, -0.756427558251, -1.58576379682, -1.86220920967, -0.756427558251, -2.41510003538, 0.0729086803133, -0.756427558251, -2.13865462252, 0.625799506023, -1.58576379682, -0.756427558251, 0.0729086803133, 0.902244918878, -2.13865462252, -0.756427558251, -0.756427558251, -1.03287297111, 0.349354093168, -1.86220920967, -1.30931838396, 0.0729086803133, -0.203536732541, 0.625799506023, -2.41510003538, 0.0729086803133, 0.0729086803133, 0.0729086803133, 0.625799506023, 0.0729086803133, -0.479982145396, 0.349354093168, -0.203536732541, -0.756427558251, -1.03287297111, -1.86220920967, 0.625799506023, 0.902244918878, 0.349354093168, 0.0729086803133, 0.349354093168, 0.902244918878, -2.13865462252, 0.349354093168, 0.625799506023, 0.349354093168, 0.625799506023, 0.0729086803133, 0.0729086803133, -0.756427558251, -0.756427558251, 0.902244918878, 0.902244918878, 0.625799506023, 0.625799506023, -1.03287297111, -0.203536732541, -0.203536732541, 0.902244918878, 0.902244918878, 0.902244918878, 0.349354093168, 0.902244918878, -0.756427558251, 0.902244918878, 0.625799506023, 0.902244918878, 0.625799506023, 0.902244918878, 0.902244918878, 0.902244918878, 0.902244918878, 0.625799506023, 0.902244918878, 0.902244918878, -1.58576379682, -1.30931838396, 0.902244918878, 0.902244918878, 0.902244918878, 0.902244918878, 0.902244918878, 0.902244918878, 0.902244918878, 0.902244918878, 0.902244918878, 0.902244918878, 0.902244918878, 0.902244918878, 0.902244918878, 0.902244918878], 
  error_x: {
    color: "black", 
    copy_ystyle: true, 
    thickness: "1", 
    width: "2"
  }, 
  error_y: {
    color: "rgb(0, 67, 88)", 
    thickness: 1, 
    width: 1
  }, 
  fill: "none", 
  line: {
    color: "#1f77b4", 
    dash: "solid", 
    shape: "linear", 
    width: 2
  }, 
  marker: {
    color: "rgb(0, 67, 88)", 
    line: {
      color: "black", 
      width: 0.8
    }, 
    size: 6, 
    symbol: "hexagon-open"
  }, 
  name: "Electoral Process", 
  opacity: 1, 
  text: ordered_countries, 
  type: "scatter", 
  uid: "949fc8"
};
var comb_trace2 = {
  x: sd_ordered_rol, 
  y: [-1.76832563768, -0.816150294313, -2.00636947352, -2.00636947352, -0.578106458471, -2.72050098104, -0.102018786789, -1.05419413015, -2.24441330936, -0.102018786789, -1.05419413015, -0.578106458471, -0.102018786789, 0.612112720734, -2.00636947352, -0.34006262263, -1.05419413015, -1.76832563768, 0.136025049052, -2.00636947352, -1.05419413015, 0.136025049052, 0.374068884893, 0.136025049052, -2.4824571452, 0.374068884893, -0.34006262263, -0.34006262263, 0.612112720734, -0.34006262263, -0.102018786789, -0.102018786789, -0.34006262263, -0.102018786789, -1.05419413015, -1.05419413015, 0.374068884893, 0.850156556576, 0.850156556576, 0.136025049052, 0.374068884893, 0.374068884893, -1.53028180184, -0.34006262263, 0.850156556576, 0.136025049052, -0.34006262263, 0.612112720734, 0.136025049052, -1.29223796599, -0.816150294313, 0.850156556576, 0.612112720734, 0.612112720734, 0.850156556576, -0.578106458471, -0.102018786789, -0.34006262263, 0.850156556576, 0.850156556576, 0.850156556576, -0.102018786789, 0.612112720734, -0.578106458471, 1.08820039242, 1.08820039242, 1.08820039242, 0.850156556576, 0.850156556576, 0.850156556576, 0.850156556576, 1.08820039242, 0.850156556576, 0.850156556576, 1.08820039242, -1.05419413015, -0.816150294313, 0.850156556576, 1.08820039242, 0.850156556576, 1.08820039242, 0.850156556576, 0.850156556576, 1.08820039242, 0.850156556576, 0.850156556576, 1.08820039242, 1.08820039242, 1.08820039242, 1.08820039242, 1.08820039242], 
  error_x: {
    color: "black", 
    copy_ystyle: true, 
    thickness: "1", 
    width: "2"
  }, 
  error_y: {
    color: "rgb(31, 138, 112)", 
    thickness: 1, 
    width: 1
  }, 
  fill: "none", 
  line: {
    color: "#ff7f0e", 
    dash: "solid", 
    shape: "linear", 
    width: 2
  }, 
  marker: {
    color: "rgb(31, 138, 112)", 
    line: {
      color: "black", 
      width: 0.8
    }, 
    size: 6, 
    symbol: "hexagon-open"
  }, 
  name: "Political Pluralism", 
  opacity: 1, 
  text: ordered_countries, 
  type: "scatter", 
  uid: "a078ad"
};
var comb_trace3 = {
  x: sd_ordered_rol, 
  y: [-1.47931696468, -1.6764148326, -0.690925493021, -0.690925493021, -0.690925493021, -1.28221909677, -1.08512122885, -1.28221909677, -0.690925493021, -1.47931696468, -0.690925493021, -0.690925493021, -0.690925493021, -0.296729757191, -0.888023360936, -0.690925493021, -1.08512122885, -0.888023360936, 0.0974659786393, -0.493827625106, -0.296729757191, -0.690925493021, -1.08512122885, -0.296729757191, -1.08512122885, -0.690925493021, -0.690925493021, -0.690925493021, 0.0974659786393, -0.690925493021, -0.296729757191, -1.47931696468, -0.690925493021, -0.690925493021, -0.690925493021, -0.493827625106, -0.690925493021, -0.690925493021, -0.690925493021, -0.296729757191, -0.296729757191, -0.296729757191, -0.296729757191, 0.0974659786393, -0.690925493021, -0.690925493021, 0.0974659786393, -0.296729757191, -0.296729757191, -0.296729757191, 0.294563846554, 0.0974659786393, 0.0974659786393, 0.0974659786393, -1.28221909677, -1.08512122885, -0.493827625106, -1.08512122885, -0.296729757191, 0.688759582385, -0.296729757191, 0.8858574503, -0.296729757191, -0.0996318892758, 0.8858574503, 1.47715105404, 0.8858574503, 0.0974659786393, 1.67424892196, 0.49166171447, 0.8858574503, 1.67424892196, 0.8858574503, 1.28005318613, 0.8858574503, 1.67424892196, 1.67424892196, 1.28005318613, 0.49166171447, 1.47715105404, 1.67424892196, 1.67424892196, 1.67424892196, 1.28005318613, 1.87134678988, 1.67424892196, 1.67424892196, 1.67424892196, 1.67424892196, 1.67424892196, 1.67424892196], 
  error_x: {
    color: "black", 
    copy_ystyle: true, 
    thickness: "1", 
    width: "2"
  }, 
  error_y: {
    color: "rgb(190, 219, 57)", 
    thickness: 1, 
    width: 1
  }, 
  fill: "none", 
  line: {
    color: "#2ca02c", 
    dash: "solid", 
    shape: "linear", 
    width: 2
  }, 
  marker: {
    color: "rgb(190, 219, 57)", 
    line: {
      color: "black", 
      width: 0.8
    }, 
    size: 6, 
    symbol: "hexagon-open"
  }, 
  name: "Property Rights", 
  opacity: 1, 
  text: ordered_countries, 
  type: "scatter", 
  uid: "2cec66"
};
var comb_trace4 = {
  x: sd_ordered_rol, 
  y: [-1.99177142126, -1.09300514357, -1.3925939028, -1.99177142126, -1.09300514357, -2.29136018049, -0.493827625106, -0.493827625106, -1.69218266203, -0.493827625106, -1.09300514357, -1.3925939028, -0.793416384337, -0.194238865875, -1.09300514357, -1.09300514357, -1.09300514357, -1.99177142126, -0.194238865875, -0.793416384337, -0.793416384337, -0.793416384337, -0.194238865875, -0.493827625106, -1.3925939028, -0.793416384337, -0.793416384337, -0.194238865875, -0.194238865875, 0.105349893356, -1.09300514357, -0.194238865875, -0.493827625106, -1.09300514357, -0.793416384337, -1.09300514357, -0.493827625106, 0.404938652587, 0.404938652587, -0.493827625106, -0.194238865875, -0.194238865875, -0.493827625106, -0.194238865875, 0.105349893356, 0.105349893356, -0.194238865875, 0.704527411818, -0.493827625106, -0.793416384337, -0.493827625106, -0.194238865875, 0.105349893356, 0.404938652587, 0.704527411818, -0.493827625106, 0.105349893356, -0.194238865875, 0.704527411818, 1.00411617105, 0.704527411818, 0.105349893356, 0.404938652587, -0.194238865875, 1.30370493028, 1.30370493028, 1.30370493028, 1.00411617105, 1.30370493028, 0.704527411818, 1.30370493028, 1.60329368951, 0.404938652587, 1.30370493028, 1.30370493028, 0.704527411818, 0.404938652587, 0.704527411818, 1.00411617105, 1.00411617105, 1.30370493028, 1.30370493028, 1.30370493028, 1.30370493028, 1.30370493028, 1.30370493028, 1.30370493028, 1.60329368951, 1.60329368951, 1.60329368951, 1.60329368951], 
  error_x: {
    color: "black", 
    copy_ystyle: true, 
    thickness: "1", 
    width: "2"
  }, 
  error_y: {
    color: "rgb(255, 225, 26)", 
    thickness: 1, 
    width: 1
  }, 
  fill: "none", 
  line: {
    color: "#d62728", 
    dash: "solid", 
    shape: "linear", 
    width: 2
  }, 
  marker: {
    color: "rgb(255, 225, 26)", 
    line: {
      color: "black", 
      width: 0.8
    }, 
    size: 6, 
    symbol: "hexagon-open"
  }, 
  name: "Personal Autonomy", 
  opacity: 1, 
  text: ordered_countries, 
  type: "scatter", 
  uid: "c3e0d5"
};
var comb_trace5 = {
  x: sd_ordered_rol, 
  y: [-0.746470506608, -0.125897375248, -0.734742428525, -0.723115371039, -0.703000046708, -0.694746282139, -0.744575139635, -0.692881911879, -0.760015513633, -0.650271499269, -0.755152682571, -0.718485414389, -0.762131507805, -0.587498912204, -0.0570480040337, -0.734748090057, -0.723667514054, -0.718997376896, -0.27888275195, -0.156692500847, -0.630687499959, -0.75292017745, -0.502959314129, -0.679251889721, -0.468341855013, -0.707612308087, -0.611364662113, -0.64962862136, -0.706438501073, -0.583441167684, -0.769615821147, -0.750756095738, -0.578986106989, -0.747812566356, -0.750750043528, -0.614978000689, -0.59948867203, -0.289882720187, -0.593689376596, -0.73044465535, -0.432019739877, -0.500739270337, -0.760346478331, -0.382579253708, -0.422215973382, -0.486877858602, -0.231648989283, -0.514090156778, -0.564734951629, -0.632034674564, -0.24299558085, -0.700562193125, -0.403291487518, -0.196912960397, -0.184888481142, -0.278491716723, -0.546655770815, -0.545677089819, -0.0708211321239, -0.132296326121, 0.377628418655, -0.408262227789, -0.287426078828, -0.602431250158, 0.262517955759, 1.89410783475, -0.023827530858, 0.968431094523, 0.0143987711454, 0.332113078939, 0.184523364535, 1.92457135778, 0.385423003415, 1.27420833577, 0.679119593408, 1.1083235445, 1.89822124364, 1.63309910242, -0.125255035755, 0.107643735393, 1.22736292138, 1.64773008196, 2.7093346704, 1.46912665522, 1.18436393686, 1.42262858925, 2.12584917133, 1.58964251621, 1.58837399265, 4.38707919596, 2.06933092735], 
  error_x: {
    color: "black", 
    copy_ystyle: true, 
    thickness: "1", 
    width: "2"
  }, 
  error_y: {
    color: "rgb(253, 116, 0)", 
    thickness: 1, 
    width: 1
  }, 
  fill: "none", 
  line: {
    color: "#9467bd", 
    dash: "solid", 
    shape: "linear", 
    width: 2
  }, 
  marker: {
    color: "rgb(253, 116, 0)", 
    line: {
      color: "black", 
      width: 0.8
    }, 
    size: 6, 
    symbol: "hexagon-open"
  }, 
  name: "GDP Per Capita", 
  opacity: 1, 
  text: ordered_countries, 
  type: "scatter", 
  uid: "be9ba8"
};
var comb_data = [comb_trace1, comb_trace2, comb_trace3, comb_trace4, comb_trace5];
var comb_layout = {
  autosize: true, 
  bargap: 0.2, 
  dragmode: "zoom", 
  font: {
    color: "#444", 
    family: "\"Open sans\", verdana, arial, sans-serif", 
    size: 12
  }, 
  height: 467, 
  hidesources: false, 
  hovermode: "x", 
  legend: {
    x: 1.02, 
    y: 1, 
    bgcolor: "#fff", 
    bordercolor: "#444", 
    borderwidth: 0, 
    font: {
      color: "#444", 
      family: "\"Open sans\", verdana, arial, sans-serif", 
      size: 12
    }, 
    traceorder: "normal"
  }, 
  paper_bgcolor: "#fff", 
  plot_bgcolor: "rgba(0, 0, 0, 0)", 
  separators: ".,", 
  showlegend: true, 
  title: "Multidimensional Comparison (Standard Deviation Units)", 
  titlefont: {
    color: "#444", 
    family: "\"Open sans\", verdana, arial, sans-serif", 
    size: 17
  }, 
  width: 705, 
  xaxis: {
    autorange: true, 
    domain: [0, 1], 
    dtick: 1, 
    exponentformat: "B", 
    gridcolor: "#eee", 
    gridwidth: 1, 
    linecolor: "rgba(152, 0, 0, 0.5)", 
    linewidth: 1.5, 
    mirror: false, 
    nticks: 0, 
    range: [-1.59155687351, 2.02695722901], 
    rangemode: "normal", 
    showexponent: "all", 
    showgrid: false, 
    showline: false, 
    showticklabels: true, 
    tickangle: "auto", 
    tickcolor: "rgba(0, 0, 0, 0)", 
    tickfont: {
      color: "#444", 
      family: "\"Open sans\", verdana, arial, sans-serif", 
      size: 12
    }, 
    ticklen: 6, 
    tickmode: "linear", 
    ticks: "", 
    title: "Rule of Law", 
    titlefont: {
      color: "#444", 
      family: "\"Open sans\", verdana, arial, sans-serif", 
      size: 14
    }, 
    type: "linear", 
    zeroline: false, 
    zerolinecolor: "rgb(68, 68, 68)", 
    zerolinewidth: 3
  }, 
  yaxis: {
    autorange: true, 
    domain: [0, 1], 
    dtick: 1, 
    exponentformat: "B", 
    gridcolor: "#eee", 
    gridwidth: 1, 
    linecolor: "rgba(152, 0, 0, 0.5)", 
    linewidth: 1.5, 
    mirror: false, 
    nticks: 0, 
    range: [-3.11536654643, 4.78194476135], 
    rangemode: "normal", 
    showexponent: "all", 
    showgrid: false, 
    showline: false, 
    showticklabels: true, 
    tickangle: "auto", 
    tickcolor: "rgba(0, 0, 0, 0)", 
    tickfont: {
      color: "#444", 
      family: "\"Open sans\", verdana, arial, sans-serif", 
      size: 12
    }, 
    ticklen: 6, 
    tickmode: "linear", 
    ticks: "", 
    titlefont: {
      color: "#444", 
      family: "\"Open sans\", verdana, arial, sans-serif", 
      size: 14
    }, 
    type: "linear", 
    zeroline: false, 
    zerolinecolor: "rgb(68, 68, 68)", 
    zerolinewidth: 3
  }
};

var threed_data = [
  {
    x: abc_rolscores, 
    y: abc_elec, 
    z: abc_plur, 
    error_x: {visible: false}, 
    error_y: {visible: false}, 
    error_z: {visible: false}, 
    marker: {
      color: "rgb(74, 42, 42)", 
      line: {
        color: "rgba(217, 217, 217, 0.14)", 
        width: 0.5
      }, 
      opacity: 1, 
      size: 12
    }, 
    mode: "markers", 
    name: "y", 
    projection: {
      x: {show: false}, 
      y: {show: false}, 
      z: {show: false}
    }, 
    surfaceaxis: -1, 
    surfacecolor: "rgb(255, 255, 0)", 
    text: abc_countries, 
    type: "scatter3d", 
    uid: "a04db9", 
    visible: true
  }
];
var threed_layout = {
  autosize: true, 
  dragmode: "turntable", 
  font: {color: "rgb(100, 100, 100)"}, 
  height: 467, 
  margin: {
    r: 0, 
    t: 0, 
    b: 0, 
    l: 0
  }, 
  paper_bgcolor: "rgba(0, 0, 0, 0)", 
  scene: {
    aspectmode: "cube", 
    aspectratio: {
      x: 1, 
      y: 1, 
      z: 1
    }, 
    camera: {
      center: {
        x: 0, 
        y: 0, 
        z: 0
      }, 
      eye: {
        x: -1.04626292141, 
        y: 1.34342365042, 
        z: 1.33717866973
      }, 
      up: {
        x: 0, 
        y: 0, 
        z: 1
      }
    }, 
    xaxis: {
      autorange: true, 
      dtick: 5, 
      exponentformat: "B", 
      fixedrange: true, 
      gridwidth: 0.8, 
      hoverformat: "", 
      linewidth: 0.2, 
      mirror: true, 
      nticks: 6, 
      rangemode: "normal", 
      showbackground: true, 
      showexponent: "all", 
      showline: true, 
      showspikes: true, 
      showticklabels: true, 
      spikecolor: "rgb(0, 0, 0)", 
      spikesides: false, 
      spikethickness: 0.9, 
      tickangle: "auto", 
      tickmode: "auto", 
      ticks: "", 
      title: "", 
      type: "linear", 
      zerolinewidth: 0.4
    }, 
    yaxis: {
      autorange: true, 
      dtick: 5, 
      exponentformat: "B", 
      fixedrange: false, 
      gridwidth: 0.8, 
      linewidth: 0.2, 
      mirror: true, 
      nticks: 6, 
      rangemode: "normal", 
      showbackground: true, 
      showexponent: "all", 
      showline: true, 
      showspikes: true, 
      showticklabels: true, 
      spikecolor: "rgb(0, 0, 0)", 
      spikesides: false, 
      spikethickness: 0.9, 
      tickmode: "auto", 
      ticks: "", 
      title: "", 
      type: "linear", 
      zerolinewidth: 0.4
    }, 
    zaxis: {
      autorange: true, 
      dtick: 5, 
      exponentformat: "B", 
      fixedrange: false, 
      gridwidth: 0.8, 
      linewidth: 0.2, 
      mirror: true, 
      nticks: 6, 
      rangemode: "normal", 
      showbackground: true, 
      showexponent: "all", 
      showline: true, 
      showspikes: true, 
      showticklabels: true, 
      spikecolor: "rgb(0, 0, 0)", 
      spikesides: false, 
      spikethickness: 0.9, 
      tickmode: "auto", 
      ticks: "", 
      title: "", 
      type: "linear", 
      zerolinewidth: 0.4
    }
  }, 
  showlegend: false, 
  width: 602
};

var hist_data = [
  {
    x: [13.5, 22.5, 31.5, 40.5, 49.5, 58.5, 67.5, 76.5, 85.5, 94.5], 
    y: [0, 1, 15, 21, 19, 9, 12, 11, 3, 0], 
    marker: {
      color: "rgb(100, 100, 100)", 
      line: {
        color: "white", 
        width: 0
      }
    }, 
    showlegend: false, 
    type: "bar", 
    uid: "1911b2", 
    xaxis: "x", 
    yaxis: "y"
  }
];
var hist_layout = {
  annotations: [
    {
      x: 0.924687656866, 
      y: 1.05244755245, 
      showarrow: false, 
      text: "Mean = 51.81", 
      xref: "paper", 
      yref: "paper"
    }, 
    {
      x: 87.0860033727, 
      y: 20.7140228193, 
      font: {color: "rgb(100, 100, 100)"}, 
      showarrow: false, 
      text: "Median = 49.17"
    }
  ], 
  autosize: true, 
  barmode: "stack", 
  font: {
    color: "rgb(100, 100, 100)", 
    family: "\"Droid Sans\", sans-serif"
  }, 
  height: 466, 
  legend: {
    x: 1.05, 
    y: 0.5, 
    bgcolor: "rgb(255,255,255)", 
    bordercolor: "transparent", 
    font: {family: ""}, 
    xanchor: "center", 
    yanchor: "top"
  }, 
  margin: {r: 10}, 
  paper_bgcolor: "rgb(255, 255, 255)", 
  plot_bgcolor: "rgb(255, 255, 255)", 
  showlegend: false, 
  title: "Histogram of Rule of Law Scores", 
  titlefont: {family: ""}, 
  width: 683, 
  xaxis: {
    autorange: true, 
    gridcolor: "white", 
    gridwidth: 1, 
    range: [9, 99], 
    showgrid: false, 
    showline: false, 
    showticklabels: true, 
    tickcolor: "rgb(100, 100, 100)", 
    tickfont: {
      color: "rgb(100, 100, 100)", 
      family: "\"Verdana\", monospace", 
      size: 10
    }, 
    ticks: "outside", 
    title: "Rule of Law Score (bin width = 9, n = 91)", 
    titlefont: {
      color: "rgb(100, 100, 100)", 
      family: "\"Verdana\", monospace", 
      size: 12
    }, 
    type: "linear", 
    zeroline: false
  }, 
  yaxis: {
    autorange: true, 
    gridcolor: "white", 
    gridwidth: 1, 
    range: [0, 22.1052631579], 
    showgrid: true, 
    showline: false, 
    showticklabels: true, 
    tickcolor: "rgb(100, 100, 100)", 
    tickfont: {
      color: "rgb(100, 100, 100)", 
      family: "\"Verdana\", monospace", 
      size: 10
    }, 
    ticks: "", 
    title: "Count", 
    titlefont: {
      color: "rgb(100, 100, 100)", 
      family: "\"Verdana\", monospace", 
      size: 12
    }, 
    type: "linear", 
    zeroline: false
  }
};

var map_data = [
  {
    z: abc_rolscores, 
    autocolorscale: false, 
    colorbar: {
      outlinewidth: 0, 
      title: "Scores"
    }, 
    colorscale: [["0", "rgb(222,45,38)"], ["0.5", "rgb(252,146,114)"], ["1", "rgb(254,224,210)"]], 
    locations: ["ALB", "ARG", "AUS", "AUT", "BGD", "BEL", "BOL", "BIH", "BWA", "BRA", "BGR", "BFA", "KHM", "CMR", "CAN", "CHL", "CHN", "COL", "CIV", "HRV", "CZE", "DNK", "DOM", "ECU", "EGY", "SLV", "EST", "ETH", "FIN", "FRA", "GEO", "DEU", "GHA", "GRC", "GTM", "HKG", "HUN", "IND", "IDN", "ITA", "JAM", "JPN", "KAZ", "KEN", "KGZ", "LBN", "LBR", "MKD", "MDG", "MWI", "MYS", "MEX", "MDA", "MNG", "MAR", "NPL", "NLD", "NZL", "NIC", "NGA", "NOR", "PAK", "PAN", "PER", "PHL", "POL", "PRT", "ROU", "RUS", "SEN", "SRB", "SLE", "SGP", "SVN", "ZAF", "KOR", "ESP", "LKA", "SWE", "TZA", "TUN", "TUR", "TKM", "UKR", "GBR", "USA", "URY", "UZB", "VEN", "ZMB", "ZWE"], 
    marker: {line: {
        color: "rgb(180,180,180)", 
        width: 0.5
      }}, 
    reversescale: true, 
    text: abc_countries, 
    type: "choropleth", 
    uid: "0bed9a", 
    zmax: 83.85, 
    zmin: 26.66
  }
];
var map_layout = {
  autosize: true, 
  geo: {
    coastlinecolor: "rgba(68, 68, 68, 0.19)", 
    coastlinewidth: 0.4, 
    framecolor: "rgba(68, 68, 68, 0.3)", 
    framewidth: 0.4, 
    landcolor: "rgba(217, 217, 217, 0.25)", 
    oceancolor: "rgb(255, 51, 200)", 
    projection: {
      rotation: {
        lat: 20, 
        lon: -70, 
        roll: 0
      }, 
      type: "orthographic"
    }, 
    showcoastlines: true, 
    showframe: true, 
    showland: true, 
    showocean: false
  }, 
  height: 526, 
  margin: {autoexpand: true}, 
  title: "Rule of Law Scores, by Country", 
  width: 602
};

var plur_data = [
  {
    x: abc_rolscores, 
    y: abc_plur, 
    fill: "none", 
    line: {
      color: "rgb(4, 158, 215)", 
      dash: "solid", 
      width: 3
    }, 
    marker: {
      color: "rgb(255, 127, 14)", 
      line: {
        color: "white", 
        width: 0
      }, 
      maxdisplayed: 0, 
      opacity: 1, 
      size: 6, 
      symbol: "circle"
    }, 
    mode: "markers", 
    name: "y", 
    opacity: 1, 
    text: abc_countries, 
    type: "scatter", 
    uid: "f8e6ce"
  }
];
var plur_layout = {
  autosize: true, 
  dragmode: "zoom", 
  font: {
    color: "rgb(100, 100, 100)", 
    family: "\"Droid Sans\", sans-serif", 
    size: 12
  }, 
  height: 466, 
  hidesources: false, 
  hovermode: "x", 
  paper_bgcolor: "rgb(255, 255, 255)", 
  plot_bgcolor: "rgb(255, 255, 255)", 
  separators: ".,", 
  showlegend: false, 
  title: "Rule of Law and Political Pluralism", 
  titlefont: {
    color: "rgb(100, 100, 100)", 
    family: "\"Open sans\", verdana, arial, sans-serif", 
    size: 17
  }, 
  width: 602, 
  xaxis: {
    autorange: true, 
    exponentformat: "B", 
    gridcolor: "white", 
    gridwidth: 1, 
    nticks: 0, 
    range: [22.8722431463, 87.6377568537], 
    rangemode: "normal", 
    showexponent: "all", 
    showgrid: false, 
    showline: false, 
    showticklabels: true, 
    tickangle: "auto", 
    tickfont: {
      color: "rgb(100, 100, 100)", 
      family: "\"Verdana\", monospace", 
      size: 10
    }, 
    tickmode: "auto", 
    ticks: "", 
    title: "Rule of Law Score", 
    titlefont: {
      color: "rgb(100, 100, 100)", 
      family: "\"Verdana\", monospace", 
      size: 12
    }, 
    type: "linear", 
    zeroline: false
  }, 
  yaxis: {
    autorange: true, 
    exponentformat: "B", 
    gridcolor: "white", 
    gridwidth: 1, 
    nticks: 0, 
    range: [-1.15566226491, 17.1556622649], 
    rangemode: "normal", 
    showexponent: "all", 
    showgrid: true, 
    showline: false, 
    showticklabels: true, 
    tickangle: "auto", 
    tickfont: {
      color: "rgb(100, 100, 100)", 
      family: "\"Verdana\", monospace", 
      size: 10
    }, 
    tickmode: "auto", 
    ticks: "", 
    title: "Freedom House Political Pluralism Score", 
    titlefont: {
      color: "rgb(100, 100, 100)", 
      family: "\"Verdana\", monospace", 
      size: 12
    }, 
    type: "linear", 
    zeroline: false
  }
};

var prop_data = [
  {
    x: abc_rolscores, 
    y: [30, 15, 90, 90, 20, 80, 10, 20, 70, 50, 30, 30, 30, 30, 90, 90, 20, 50, 25, 40, 70, 90, 30, 20, 35, 40, 85, 30, 90, 80, 45, 90, 50, 40, 30, 90, 65, 50, 30, 50, 40, 80, 35, 30, 20, 20, 30, 35, 40, 40, 55, 50, 40, 30, 40, 30, 90, 95, 15, 30, 90, 30, 30, 40, 30, 60, 70, 40, 25, 40, 40, 10, 90, 60, 50, 70, 70, 40, 90, 30, 40, 50, 30, 30, 90, 85, 70, 15, 5, 30, 10], 
    fill: "none", 
    line: {
      color: "rgb(4, 158, 215)", 
      dash: "solid", 
      width: 3
    }, 
    marker: {
      color: "rgb(44, 160, 44)", 
      line: {
        color: "white", 
        width: 0
      }, 
      maxdisplayed: 0, 
      opacity: 1, 
      size: 6, 
      symbol: "circle"
    }, 
    mode: "markers", 
    name: "y", 
    opacity: 1, 
    text: abc_countries, 
    type: "scatter", 
    uid: "f6b48d"
  }
];
var prop_layout = {
  autosize: true, 
  dragmode: "zoom", 
  font: {
    color: "rgb(100, 100, 100)", 
    family: "\"Droid Sans\", sans-serif", 
    size: 12
  }, 
  height: 466, 
  hidesources: false, 
  hovermode: "x", 
  paper_bgcolor: "rgb(255, 255, 255)", 
  plot_bgcolor: "rgb(255, 255, 255)", 
  separators: ".,", 
  showlegend: false, 
  title: "Rule of Law and Property Rights", 
  titlefont: {
    color: "rgb(100, 100, 100)", 
    family: "\"Open sans\", verdana, arial, sans-serif", 
    size: 17
  }, 
  width: 602, 
  xaxis: {
    autorange: true, 
    exponentformat: "B", 
    gridcolor: "white", 
    gridwidth: 1, 
    nticks: 0, 
    range: [22.8722431463, 87.6377568537], 
    rangemode: "normal", 
    showexponent: "all", 
    showgrid: false, 
    showline: false, 
    showticklabels: true, 
    tickangle: "auto", 
    tickfont: {
      color: "rgb(100, 100, 100)", 
      family: "\"Verdana\", monospace", 
      size: 10
    }, 
    tickmode: "auto", 
    ticks: "", 
    title: "Rule of Law Score", 
    titlefont: {
      color: "rgb(100, 100, 100)", 
      family: "\"Verdana\", monospace", 
      size: 12
    }, 
    type: "linear", 
    zeroline: false
  }, 
  yaxis: {
    autorange: true, 
    exponentformat: "B", 
    gridcolor: "white", 
    gridwidth: 1, 
    nticks: 0, 
    range: [-1.5006002401, 101.50060024], 
    rangemode: "normal", 
    showexponent: "all", 
    showgrid: true, 
    showline: false, 
    showticklabels: true, 
    tickangle: "auto", 
    tickfont: {
      color: "rgb(100, 100, 100)", 
      family: "\"Verdana\", monospace", 
      size: 10
    }, 
    tickmode: "auto", 
    ticks: "", 
    title: "Heritage Foundation Property Rights Score", 
    titlefont: {
      color: "rgb(100, 100, 100)", 
      family: "\"Verdana\", monospace", 
      size: 12
    }, 
    type: "linear", 
    zeroline: false
  }
};

var auto_data = [
  {
    x: abc_rolscores, 
    y: [9, 13, 15, 15, 9, 15, 9, 10, 11, 12, 11, 8, 6, 4, 16, 15, 6, 10, 4, 13, 15, 15, 11, 10, 7, 10, 14, 5, 16, 15, 10, 15, 10, 13, 8, 13, 14, 10, 9, 14, 10, 13, 8, 7, 7, 9, 8, 11, 9, 7, 9, 10, 9, 12, 8, 7, 16, 15, 9, 7, 16, 6, 12, 10, 10, 14, 15, 12, 7, 9, 13, 10, 12, 13, 11, 12, 15, 8, 16, 8, 9, 10, 7, 11, 15, 15, 15, 3, 7, 8, 4], 
    fill: "none", 
    line: {
      color: "rgb(4, 158, 215)", 
      dash: "solid", 
      width: 3
    }, 
    marker: {
      color: "rgb(214, 39, 40)", 
      line: {
        color: "white", 
        width: 0
      }, 
      maxdisplayed: 0, 
      opacity: 1, 
      size: 6, 
      symbol: "circle"
    }, 
    mode: "markers", 
    name: "y", 
    opacity: 1, 
    text: abc_countries, 
    type: "scatter", 
    uid: "c22464"
  }
];
var auto_layout = {
  autosize: true, 
  dragmode: "zoom", 
  font: {
    color: "rgb(100, 100, 100)", 
    family: "\"Droid Sans\", sans-serif", 
    size: 12
  }, 
  height: 466, 
  hidesources: false, 
  hovermode: "x", 
  paper_bgcolor: "rgb(255, 255, 255)", 
  plot_bgcolor: "rgb(255, 255, 255)", 
  separators: ".,", 
  showlegend: false, 
  title: "Rule of Law and Personal Autonomy", 
  titlefont: {
    color: "rgb(100, 100, 100)", 
    family: "\"Open sans\", verdana, arial, sans-serif", 
    size: 17
  }, 
  width: 602, 
  xaxis: {
    autorange: true, 
    exponentformat: "B", 
    gridcolor: "white", 
    gridwidth: 1, 
    nticks: 0, 
    range: [22.8722431463, 87.6377568537], 
    rangemode: "normal", 
    showexponent: "all", 
    showgrid: false, 
    showline: false, 
    showticklabels: true, 
    tickangle: "auto", 
    tickfont: {
      color: "rgb(100, 100, 100)", 
      family: "\"Verdana\", monospace", 
      size: 10
    }, 
    tickmode: "auto", 
    ticks: "", 
    title: "Rule of Law Score", 
    titlefont: {
      color: "rgb(100, 100, 100)", 
      family: "\"Verdana\", monospace", 
      size: 12
    }, 
    type: "linear", 
    zeroline: false
  }, 
  yaxis: {
    autorange: true, 
    exponentformat: "B", 
    gridcolor: "white", 
    gridwidth: 1, 
    nticks: 0, 
    range: [2.06102440976, 16.9389755902], 
    rangemode: "normal", 
    showexponent: "all", 
    showgrid: true, 
    showline: false, 
    showticklabels: true, 
    tickangle: "auto", 
    tickfont: {
      color: "rgb(100, 100, 100)", 
      family: "\"Verdana\", monospace", 
      size: 10
    }, 
    tickmode: "auto", 
    ticks: "", 
    title: "Freedom House Personal Autonomy Score", 
    titlefont: {
      color: "rgb(100, 100, 100)", 
      family: "\"Verdana\", monospace", 
      size: 12
    }, 
    type: "linear", 
    zeroline: false
  }
};

var elec_data = [
  {
    x: abc_rolscores, 
    y: abc_elec, 
    fill: "none", 
    line: {
      color: "rgb(4, 158, 215)", 
      dash: "solid", 
      width: 3
    }, 
    marker: {
      color: "rgb(31, 119, 180)", 
      line: {
        color: "white", 
        width: 0
      }, 
      maxdisplayed: 0, 
      opacity: 1, 
      size: 6, 
      symbol: "circle"
    }, 
    mode: "markers", 
    name: "y", 
    opacity: 1, 
    text: abc_countries, 
    type: "scatter", 
    uid: "4c3b1a"
  }
];
var elec_layout = {
  autosize: true, 
  dragmode: "zoom", 
  font: {
    color: "rgb(100, 100, 100)", 
    family: "\"Droid Sans\", sans-serif", 
    size: 12
  }, 
  height: 466, 
  hidesources: false, 
  hovermode: "x", 
  paper_bgcolor: "rgb(255, 255, 255)", 
  plot_bgcolor: "rgb(255, 255, 255)", 
  separators: ".,", 
  showlegend: false, 
  title: "Rule of Law and Electoral Process", 
  titlefont: {
    color: "rgb(100, 100, 100)", 
    family: "\"Open sans\", verdana, arial, sans-serif", 
    size: 17
  }, 
  width: 602, 
  xaxis: {
    autorange: true, 
    exponentformat: "B", 
    gridcolor: "white", 
    gridwidth: 1, 
    nticks: 0, 
    range: [22.8722431463, 87.6377568537], 
    rangemode: "normal", 
    showexponent: "all", 
    showgrid: false, 
    showline: false, 
    showticklabels: true, 
    tickangle: "auto", 
    tickfont: {
      color: "rgb(100, 100, 100)", 
      family: "\"Verdana\", monospace", 
      size: 10
    }, 
    tickmode: "auto", 
    ticks: "", 
    title: "Rule of Law Score", 
    titlefont: {
      color: "rgb(100, 100, 100)", 
      family: "\"Verdana\", monospace", 
      size: 12
    }, 
    type: "linear", 
    zeroline: false
  }, 
  yaxis: {
    autorange: true, 
    exponentformat: "B", 
    gridcolor: "white", 
    gridwidth: 1, 
    nticks: 0, 
    range: [-0.866746698679, 12.8667466987], 
    rangemode: "normal", 
    showexponent: "all", 
    showgrid: true, 
    showline: false, 
    showticklabels: true, 
    tickangle: "auto", 
    tickfont: {
      color: "rgb(100, 100, 100)", 
      family: "\"Verdana\", monospace", 
      size: 10
    }, 
    tickmode: "auto", 
    ticks: "", 
    title: "Freedom House Electoral Process Score", 
    titlefont: {
      color: "rgb(100, 100, 100)", 
      family: "\"Verdana\", monospace", 
      size: 12
    }, 
    type: "linear", 
    zeroline: false
  }
};

var gdp_data = [
  {
    x: [3.75185425328, 3.95008920623, 4.29428772037, 4.29251212747, 3.45220730257, 4.29823733394, 3.51184390175, 4.0212360904, 4.10363460913, 3.9479691322, 3.85566427176, 3.78691319439, 3.35654862999, 3.38946212544, 4.24892372167, 4.1895032154, 3.67198758644, 3.85078569596, 3.5986811862, 4.05074092474, 4.23454119272, 4.38800870635, 3.89528368142, 3.66637818877, 3.78713982328, 3.54817957201, 4.29018543101, 3.50945370043, 4.41000652118, 4.26591407799, 4.11806108884, 4.34289591747, 3.93573953205, 4.06405716128, 3.68059523453, 4.2730484721, 4.0614769586, 3.70671937224, 3.7934646693, 4.17530992105, 3.84908320565, 4.27722152031, 3.6325736179, 3.57682995031, 3.58961145246, 3.95258896717, 3.52929738429, 3.99101901165, 3.84929617552, 3.72158862852, 3.92632031013, 3.62354061281, 3.6689318163, 3.82885876417, 3.65325227647, 3.77184097483, 4.38912637179, 4.33506604581, 3.48492559719, 3.40684805317, 4.42616313016, 3.51690418937, 3.81573234511, 3.84417233852, 3.68787895378, 4.28977427497, 4.14249960411, 4.10742530176, 3.57037741003, 3.82885876417, 3.90358752661, 3.74478708605, 4.27597143333, 4.19750265432, 3.94507085947, 4.25901118378, 4.26633516018, 3.92296294547, 4.42902948827, 3.66535490907, 3.92038792176, 3.89630004496, 3.51363281099, 3.70868208141, 4.29223867928, 4.14440376209, 4.17145991244, 3.41542896391, 3.32647383547, 3.67933404127, 3.28316431475], 
    y: [8.28211114527, 9.35611824556, 11.119987293, 10.7576698242, 6.62291338401, 10.6813691203, 7.85351641825, 8.43300797626, 8.88905597108, 9.33582614857, 8.85115954842, 6.45013647592, 6.84818931911, 7.06210042582, 10.8655095878, 9.64349105413, 8.71456588561, 8.95526145449, 7.12808164247, 9.53053883658, 9.8367676062, 10.9372025255, 8.65394854437, 8.59820641756, 8.08853174851, 8.23959345431, 9.75401628066, 6.1174619444, 10.7329527487, 10.5908646937, 8.16034609399, 10.6605113048, 7.379499065, 10.0186605785, 8.10974763061, 10.5068125914, 9.44032912819, 7.30600322509, 8.17646745001, 10.4299896557, 8.60608897956, 10.7516336872, 9.40214558623, 6.8480731741, 7.05291316483, 9.18607733694, 6.02299986966, 8.42888415579, 6.10326308171, 5.59159577479, 9.25400653718, 9.18530270814, 7.60820488928, 8.20749854168, 7.99067140974, 6.53605703335, 10.733487427, 10.5462202391, 7.46807147281, 7.3496612344, 11.5122592431, 7.13598853432, 9.16326255669, 8.82364794919, 7.85833052952, 9.45108397391, 9.91425791482, 9.16822712126, 9.54968056773, 6.93268000293, 8.557720076, 6.44995160538, 10.8557316919, 9.97867204255, 8.90221623265, 10.0253511403, 10.2494990054, 7.981815908, 10.9175848671, 6.38155492548, 8.34947653655, 9.27478218236, 6.30572278476, 8.26008569991, 10.5678356265, 10.85419664, 9.59439610558, 7.44728077759, 9.45010764701, 7.29065206256, 6.57298263987], 
    fill: "none", 
    line: {
      color: "rgb(4, 158, 215)", 
      dash: "solid", 
      width: 3
    }, 
    marker: {
      color: "rgb(148, 103, 189)", 
      line: {
        color: "white", 
        width: 0
      }, 
      maxdisplayed: 0, 
      opacity: 1, 
      size: 6, 
      symbol: "circle"
    }, 
    mode: "markers", 
    name: "y", 
    opacity: 1, 
    text: abc_countries, 
    type: "scatter", 
    uid: "0168bd"
  }
];
var gdp_layout = {
  autosize: true, 
  dragmode: "zoom", 
  font: {
    color: "rgb(100, 100, 100)", 
    family: "\"Droid Sans\", sans-serif", 
    size: 12
  }, 
  height: 466, 
  hidesources: false, 
  hovermode: "x", 
  paper_bgcolor: "rgb(255, 255, 255)", 
  plot_bgcolor: "rgb(255, 255, 255)", 
  separators: ".,", 
  showlegend: false, 
  title: "Rule of Law and GDP", 
  titlefont: {
    color: "rgb(100, 100, 100)", 
    family: "\"Open sans\", verdana, arial, sans-serif", 
    size: 17
  }, 
  width: 602, 
  xaxis: {
    autorange: true, 
    exponentformat: "B", 
    gridcolor: "white", 
    gridwidth: 1, 
    nticks: 0, 
    range: [3.20727239895, 4.50492140407], 
    rangemode: "normal", 
    showexponent: "all", 
    showgrid: false, 
    showline: false, 
    showticklabels: true, 
    tickangle: "auto", 
    tickfont: {
      color: "rgb(100, 100, 100)", 
      family: "\"Verdana\", monospace", 
      size: 10
    }, 
    tickmode: "auto", 
    ticks: "", 
    title: "Log of Rule of Law Score", 
    titlefont: {
      color: "rgb(100, 100, 100)", 
      family: "\"Verdana\", monospace", 
      size: 12
    }, 
    type: "linear", 
    zeroline: false
  }, 
  yaxis: {
    autorange: true, 
    exponentformat: "B", 
    gridcolor: "white", 
    gridwidth: 1, 
    nticks: 0, 
    range: [5.16395281519, 11.9399022027], 
    rangemode: "normal", 
    showexponent: "all", 
    showgrid: true, 
    showline: false, 
    showticklabels: true, 
    tickangle: "auto", 
    tickfont: {
      color: "rgb(100, 100, 100)", 
      family: "\"Verdana\", monospace", 
      size: 10
    }, 
    tickmode: "auto", 
    ticks: "", 
    title: "Log of GDP Per Capita", 
    titlefont: {
      color: "rgb(100, 100, 100)", 
      family: "\"Verdana\", monospace", 
      size: 12
    }, 
    type: "linear", 
    zeroline: false
  }
};