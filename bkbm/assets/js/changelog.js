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
  var metaData = ["1.5.2", "18/08/2024"]
  updateMetaInfo(metaData)

  // Just add a new row.
  var changeLogData = [
    // Add a new row below this comment.
    ["2024, July, 16 - v 1.5.2", ["Added: Offline purchase verification.", "Updated: Plugin for WordPress 6.5.5"]],
    ["2024, June, 20 - v 1.5.1", ["Fixed: Email issue for external question submission.", "Updated: Plugin for WordPress 6.5.4"]],
    ["2024, March, 12 - v 1.5.0", ["Updated: Plugin Code.", "Updated: Plugin for WordPress 6.4.3"]],
    ["2024, January, 04 - v 1.4.9", ["Fixed: KB Accordion Layout.", "Fixed: Shortcode save issue for Gutenberg editor.", "Updated: Plugin for WordPress 6.4.2"]],
    ["2023, September, 01 - v 1.4.8", ["Fixed: Plugin shortcode issues.", "Updated: Plugin Code.", "Updated: Restrict KB Access by User Role to 1.0.8"]],
  ]
  generateDynamicLog(changeLogData)
})
