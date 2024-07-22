$(function () {
  // Update the log text
  function updatesLogTag(string) {
    let Obj = {
      "Added:": "<b>Added:</b>",
      "Updated:": "<b>Updated:</b>",
      "Fixed:": "<b>Fixed:</b>",
    }

    return string.replace(/Added:|Updated:|Fixed:/gi, function (matched) {
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
  var metaData = ["2.0.7", "23/07/2024"]
  updateMetaInfo(metaData)

  // Just add a new row.
  var changeLogData = [
    // Add a new row below this comment.
    ["2024, July, 23 - v 2.0.7", ["Updated: Plugin accessibility code.", "Updated: Plugin Faq submission form.", "Updated: Plugin for WordPress 6.6"]],
    ["2024, July, 17 - v 2.0.6", ["Updated: Plugin code.", "Updated: Plugin for WordPress 6.5.5"]],
    ["2024, June, 14 - v 2.0.5", ["Added: Option to setup FAQ title tag.", "Fixed: Plugin faq title font size issue.", "Fixed: Plugin update notice warning message.", "Updated: Plugin for WordPress 6.5.4"]],
    ["2024, January, 10 - v 2.0.4", ["Fixed: FAQ Admin panel analytics page query issue.", "Fixed: Plugin analytics page."]],
    ["2024, January, 09 - v 2.0.3", ["Fixed: FAQ like vote count issue."]],
    ["2024, January, 03 - v 2.0.2", ["Added: FAQ like button animation.", "Updated: Plugin FAQ analytics page.", "Updated: Plugin for WordPress 6.4.2", "Fixed: Plugin license activation issue."]],
    ["2023, October, 25 - v 2.0.1", ["Fixed: Plugin license activation issue."]],
    ["2023, October, 17 - v 2.0.0", ["Fixed: Shortcode editor loading issue.", "Updated: Plugin License page."]],
    ["2023, October, 05 - v 1.9.9", ["Fixed: Plugin code minor issues.", "Updated: Plugin for WordPress 6.3.1"]],
    ["2023, September, 26 - v 1.9.8", ["Fixed: Plugin code minor issues.", "Updated: Plugin for WordPress 6.3.1"]],
    ["2023, September, 11 - v 1.9.7", ["Fixed: Plugin code issues.", "Updated: Plugin for WordPress 6.3.1"]],
  ]
  generateDynamicLog(changeLogData)
})
