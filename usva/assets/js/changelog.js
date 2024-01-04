$(function () {
  // Update the log text
  function updatesLogTag(string) {
    let Obj = {
      "Updated:": "<b>Updated:</b>",
      "Fixed:": "<b>Fixed:</b>",
      "Added:": "<b>Added:</b>",
    }

    return string.replace(/Updated:|Fixed:|Added:/gi, function (matched) {
      return Obj[matched]
    })
  }

  // Generate Dynamic Log File.
  function generateDynamicLog(data) {
    const $dynamic_log = $("#dynamic_log")
    const commonLogText = "<b>Updated:</b> Plugin translation file & documentation."
    if ($dynamic_log.length) {
      data.forEach((element) => {
        var outputHtml = "<div>"

        outputHtml += `<p class="log_date">` + element[0] + `</p>`

        if (element[1].length > 0) {
          // console.log(element[1])

          outputHtml += `<ul class="square-list">`

          element[1].forEach((log) => {
            outputHtml += `<li>` + updatesLogTag(log) + `</li>`
          })

          outputHtml += `<li>` + commonLogText + `</li>`
          outputHtml += `</ul>`
        }

        outputHtml += "</div>"

        $dynamic_log.before(outputHtml)
      })
    } else {
      alert("#dynamic_log is missing. Example: srcare doc")
    }
  }

  // Update Version and Last Update Info

  function updateMetaInfo(metaData) {
    const $lastUpdate = $(".update"),
      $ver = $(".ver")

    if ($lastUpdate.length) {
      $ver.html("").html(metaData[0])
      $lastUpdate.html("").html(metaData[1])
    } else {
      alert(".update is missing. Example: srcare doc")
    }
  }
  // Change only the version and date
  var metaData = ["1.2.6", "04/01/2024"]
  updateMetaInfo(metaData)

  // Just add a new row.
  var changeLogData = [
    // Add a new row below this comment.
    ["2024, January, 04 - v 1.2.6", ["Updated: Plugin notice issue"]],
    ["2024, January, 03 - v 1.2.5", ["Updated: Plugin For WP Bakery Page Builder 7.3"]],
    ["2023, November, 18 - v 1.2.4", ["Fixed: WP Bakery Page Builder Frontend Editor Compatibility.", "Updated: Plugin For WP Bakery Page Builder 7.2"]],
    ["2023, October, 17 - v 1.2.3", ["Fixed: Plugin Notice Display issues.", "Updated: Plugin License Page"]],
    ["2023, September, 20 - v 1.2.2", ["Fixed: Plugin Translation issues.", "Updated: Plugin Translation .POT file"]],
    ["2023, August, 03 - v 1.2.1", ["Updated: Plugin license notice and activation page."]],
    ["2023, July, 29 - v 1.2.0", ["Fixed: Plugin code issues."]],
  ]
  generateDynamicLog(changeLogData)
})
